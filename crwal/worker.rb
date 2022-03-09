require 'mechanize'
require 'active_record'
require 'nokogiri'
require 'json'
require 'mathn'

class LocalTable < ActiveRecord::Base
  self.pluralize_table_names  = false
  self.abstract_class         = true
end

class RunKey < LocalTable ; end
class RoomList < LocalTable ; 
  belongs_to :run_key
end
class RoomSimple < LocalTable ; end
class RoomDetailPage < LocalTable ; 
  belongs_to :room_simple
end
class RoomDetail < LocalTable ; 
  belongs_to :room_detail_page
end
ActiveRecord::Base.establish_connection(YAML.load_file("db.yml"))

def new_agent
  agent = Mechanize.new
  agent.agent.http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  agent.user_agent_alias = 'Windows IE 9'
  agent
end

def do_log(text)
  puts "[#{Time.now}]\t#{text}"
end

def init_run_keys
  do_log "do task init_run_keys"
  base_urls = [
    "https://cd.ziroom.com/z/z1/?isOpen=0", # 成都合租
    "https://cd.ziroom.com/z/z2/?isOpen=0", # 成都整租
  ]
  base_urls.map {|base_url| 
    do_log "\t#{base_url} enqueue"
    RunKey.find_or_create_by(:base_url => base_url, :level => 0)
  }
  forage_url_with_line
  forage_url_with_station
end

def forage_url_with_line
  do_log 'do task forage_url_with_line'
  flag = 'f'
  RunKey.where(:is_processed => "f", :level => 0).update_all(:is_processed => "n")
  RunKey.where(:is_processed => "n", :level => 0).each do |run_key|
    begin
      agent = new_agent
      html = agent.get run_key.base_url
      doc = Nokogiri::HTML(html.body)
      doc.xpath('(//div[@class="wrapper"])[2]//a').each do |a|
          RunKey.find_or_create_by(:base_url => 'https:' + a["href"], :level => 1)
      end
      flag = 'y'
    rescue => exception
      flag = 'f'
      do_log "forage_url_with_line error"
      do_log exception.message
    ensure
      run_key.is_processed = flag
      run_key.save  
    end
  end
end

def forage_url_with_station
  do_log 'do task forage_url_with_station'
  flag = 'f'
  RunKey.where(:is_processed => "f", :level => 1).update_all(:is_processed => "n")
  RunKey.where(:is_processed => "n", :level => 1).each do |run_key|
    begin
      agent = new_agent
      html = agent.get run_key.base_url
      doc = Nokogiri::HTML(html.body)
      doc.xpath('//div[@class="grand-child-opt"]//a[@class="checkbox "]').each do |a|
        RunKey.find_or_create_by(:base_url => 'https:' + a["href"], :level => 2, :station => a.text)
      end
      flag = 'y'
    rescue => exception
      flag = 'f'
      do_log "forage_url_with_station error"
      do_log exception.message
    ensure
      run_key.is_processed = flag
      run_key.save
    end
  end
end

def forage_room_list
  do_log 'do task forage_room_list'
  flag = 'f'
  RunKey.where(:is_processed => "f", :level => 2).update_all(:is_processed => "n")
  RunKey.where(:is_processed => "n", :level => 2).each do |run_key|
    begin
      agent = new_agent
      page = 1
      base_url = run_key.base_url
      url = base_url.sub /\/$/, "-p#{page}/"
      html = agent.get url
      doc = Nokogiri::HTML(html.body)
      doc.css(".summary").text =~ /(\d+)/
      rooms_num = $1.to_i
      if rooms_num == 0
        flag = 'y'
        page = 0
        next # will do things that in ensure block
      elsif rooms_num > 30
        doc.xpath('//div[@id="page"]/span').text =~ /(\d+)/
        page = $1.to_i
      end
      do_log "\tprocess run_key #{run_key.id}"
      crawl(run_key, base_url, page)
      flag = 'y'
    rescue => exception
      flag = 'f'
      do_log "forage_room_list error"
      do_log exception.message
    ensure
      run_key.page = page
      run_key.is_processed = flag
      run_key.save
    end
  end
end

def crawl(run_key, base_url, page)
  1.upto(page).each do |p|
    begin
      sleep(1)
      agent = new_agent
      url = base_url.sub /\/$/, "-p#{p}/"
      html = agent.get url
      do_log "\t\tcrwal #{url}"
      doc = Nokogiri::HTML(html.body)
      room_list = RoomList.find_or_create_by(:run_key_id => run_key.id, :page => p)
      room_list.page_html = doc.css(".Z_list").to_html
      room_list.page = p
      room_list.created_at = Time.now
      room_list.save
    rescue => exception
      raise exception.message
    end
  end
end

def forage_room_simple
  do_log 'do task forage_room_simple'
  flag = 'f'
  loop do
    RoomList.where(:is_processed => "f").update_all(:is_processed => "n")
    room_lists = RoomList.where(:is_processed => "n").limit(100)
    do_log "\troom_lists size = #{room_lists.size}"
    break if room_lists.size == 0
    room_lists.each do |room_list|
      begin
        doc = Nokogiri::HTML(room_list.page_html)
        doc.xpath('//div[@class="Z_list-box"]/div/div[@class="info-box"]').each do |e|
          url = "https:" + e.css("a").attribute("href").value
          station = room_list.run_key.station
          room_simple = RoomSimple.find_or_create_by(:url => url, :station => station)
          room_simple.room_list_id = room_list.id
          room_simple.save
          do_log "\tcrwal url #{url}"
        end
        flag = 'y'
      rescue => exception
        flag = 'f'
        do_log "forage_room_simple error"
        do_log exception.message
      ensure
        room_list.is_processed = flag
        room_list.save
      end
    end
  end
end

def forage_room_detail_page
  do_log 'do task forage_room_detail_page'
  flag = 'f'
  loop do
    RoomSimple.where(:is_processed => "f").update_all(:is_processed => "n")
    room_simples = RoomSimple.where(:is_processed => "n").limit(100)
    do_log "\troom_simples size = #{room_simples.size}"
    break if room_simples.size == 0
    room_simples.each do |room_simple|
      begin
        sleep(1)
        agent = new_agent
        do_log "\tcrawl #{room_simple.url}"
        html = agent.get room_simple.url
        doc = Nokogiri::HTML(html.body)
        room_detail_page = RoomDetailPage.new
        room_detail_page.room_simple_id = room_simple.id
        room_detail_page.page_html = doc.css(".Z_container.Z_main").to_html
        room_detail_page.updated_at = Time.now
        room_detail_page.save
        flag = 'y'
      rescue Mechanize::ResponseCodeError
        flag = '404'
        do_log "get 404 response => #{room_simple.url}"
      rescue => exception
        flag = 'f'
        do_log "forage_room_detail_page error"
        do_log exception.message
      ensure
        room_simple.is_processed = flag
        room_simple.save
      end
    end
  end
end

def forage_room_detail
  do_log 'do task forage_room_detail_page'
  flag = 'f'
  loop do
    RoomDetailPage.where(:is_processed => "f").update_all(:is_processed => "n")
    room_detail_pages = RoomDetailPage.where(:is_processed => "n").limit(100)
    do_log "\troom_detail_pages size = #{room_detail_pages.size}"
    break if room_detail_pages.size == 0
    room_detail_pages.each do |room_detail_page|
      begin
        do_log "\tparse room_detail_page #{room_detail_page.id}"
        doc = Nokogiri::HTML(room_detail_page.page_html)
        room_detail = RoomDetail.find_or_create_by(:room_detail_page_id => room_detail_page.id)
        room_detail.room_detail_page_id = room_detail_page.id
        room_detail.station = room_detail_page.room_simple.station
        raise "there are something wrong about img url." if doc.css(".Z_price > i.num")[0].to_s !~ /(\/\/static8.*\.png).*/
        room_detail.price_img_url = 'https:' + $1
        raise "there are something wrong about img position." if doc.css(".Z_price > i.num")[0].to_s !~ /background-position:(.*)px;.*/
        room_detail.price_img_position = doc.css(".Z_price > i.num").map{|e| (e.to_s =~ /background-position:(.*)px;.*/ ) && $1}
        room_detail.neighbourhood = doc.css(".Z_village_info > h3").text
        room_detail.area = doc.css(".Z_home_info .Z_home_b.clearfix dl dd")[0].text.to_f
        room_detail.house_type = doc.css("#meetinfo").blank? ? "整租" : "合租" 
        # 16/18 => 总高18楼，位于16楼
        room_detail.floor = doc.css("ul.Z_home_o li[2] span.va").text
        room_detail.save
        flag = 'y'
      rescue => exception
        flag = 'f'
        do_log "forage_room_detail error"
        do_log exception.message
      ensure
        room_detail_page.is_processed = flag
        room_detail_page.save
      end
    end
  end
end

def get_geocode
  do_log 'do task get_geocode'
  flag = 'f'
  RoomDetail.where(:is_geocoded => "f").update_all(:is_geocoded => "n")
  loop do
    room_details = RoomDetail.where(:is_geocoded => "n").limit(2000)
    break if room_details.empty?
    room_details.each do |room_detail|
      begin
        agent = new_agent
        do_log "get geocode for #{room_detail.neighbourhood}"
        base_url = "https://restapi.amap.com/v3/geocode/geo?"
        data = "address=#{room_detail.neighbourhood}&city=chengdu&output=json&key=ff7c4d965be7bbfcf3e18cf034f4f033"
        html = agent.get base_url + data
        room_detail.geocode = JSON.parse(html.body)["geocodes"][0]["location"]
        flag = 'y'
      rescue => exception
        flag = 'f'
        do_log "get_geocode error"
        do_log exception.message
      ensure
        room_detail.is_geocoded = flag
        room_detail.save
      end
    end
  end
end

def parse_price
  do_log 'do task parse_price'
  loop do
    room_details = RoomDetail.where("is_geocoded = 'y' and price is null").limit(100)
    break if room_details.empty?
    room_details.each do |room_detail|
      begin
        do_log "parse price for room_detail #{room_detail.id}"
        key = room_detail.price_img_url.match(/.*\/(.*)\./)[1]
        # should run driver.py before call curl http://127.0.0.1:2020/ocr/...
        # => python driver.py
        prices_a = `curl http://127.0.0.1:2020/ocr/#{key}`.strip.split("")
        prices_position = eval(room_detail.price_img_position)
        flag = -31.24
        price = prices_position.map{|e| prices_a[(e.to_f / -31.24).to_i]}.join("").to_i
        do_log("\tget price #{price} for key #{key}")
        room_detail.price = price
      rescue => exception
        do_log "parse_price error"
        do_log exception.message
      ensure
        room_detail.save
      end
    end
  end
end

init_run_keys
forage_room_list
forage_room_simple
forage_room_detail_page
forage_room_detail
get_geocode
parse_price

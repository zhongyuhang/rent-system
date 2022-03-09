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

  def url
    self.room_detail_page.room_simple.url
  end
end

class SearchHouse < LocalTable ; end

ActiveRecord::Base.establish_connection(YAML.load_file("db.yml"))

loop do
  rooms = RoomDetail.where("price is not null and is_processed = 'n'").limit(1000)
  break if rooms.blank?
  rooms.each do |room|
    sh = SearchHouse.create(
      house_url: room.url,
      house_title: room.neighbourhood,
      house_area: room.area.to_i == 0 ? 6 : room.area,
      house_floor: room.floor,
      house_subway: room.station,
      house_geocode: room.geocode,
      house_price: room.price,
      house_rent: room.house_type,
    )
    sh.save
    room.is_processed = 'y'
    room.save
  end
  puts "process 1000"
end

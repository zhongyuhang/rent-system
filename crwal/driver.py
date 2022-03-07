from flask import Flask, jsonify
import pytesseract
from PIL import Image
import pytesseract
import requests
from io import BytesIO

app = Flask(__name__)

@app.route('/')
def index():
  return "itis index"

@app.route('/ocr/<key>')
def ocr(key):
  url = "https://static8.ziroom.com/phoenix/pc/images/2019/price/%s.png" % key
  image = Image.open(BytesIO(requests.get(url).content))
  numbers = pytesseract.image_to_string(image, config='--psm 7')
  return numbers.strip()

@app.route('/geocode/<area>')
def get_geocode(area):
  base_url = "https://restapi.amap.com/v3/geocode/geo?"
  data = "address=%s&city=chengduy&output=json&key=ff7c4d965be7bbfcf3e18cf034f4f033" % area
  response = requests.get(base_url + data)
  return response.text

if __name__ == "__main__":
  app.run(port=2020, host="127.0.0.1", debug=True)

import cloudinary
import cloudinary.uploader
send = cloudinary.uploader


cloudinary.config( 
  cloud_name = "dkxtoyioe", 
  api_key = "761129495866867", 
  api_secret = "9Bway9aZjtxMzvxugs7uGikrUdI" 
)

def add_image_to_cloud(image):
  result = send.upload(image) 
  return result
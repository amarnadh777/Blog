const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config()
const cloudinaryconfig = async() =>
{ 
    try {
        cloudinary.config({
            cloud_name:process.env.Cloudinary_cloudname,
            api_key: process.env.Cloudinary_apikey, 
            api_secret: process.env.Cloudinary_apisecret
        })
        console.log("cloudinary configartion success")
       
    } catch (error) {
        console.log(error)
    }
    
}
cloudinaryconfig()
module.exports = cloudinaryconfig
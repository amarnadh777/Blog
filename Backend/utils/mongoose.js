const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

connectdb = async() =>
{
    try {

        const coonnect = await mongoose.connect("mongodb+srv://amarnadh65:Amar%409020@cluster0.et3nq.mongodb.net/apppp?retryWrites=true&w=majority&appName=Cluster0",{
         
          
   
         
            
  })
  console.log("db connection succefully");
  
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectdb
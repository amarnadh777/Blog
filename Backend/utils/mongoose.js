const mongoose = require('mongoose')

connectdb = async() =>
{
    try {
        const coonnect = await mongoose.connect(process.env.Mogodb_url,{
         
          
   
         
            
  })
  console.log("db connection succefully");
  
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectdb
const express = require('express')
const app = express()
const author = require('./routes/author')
const connectdb = require("./utils/mongoose")
const dotenv =require('dotenv')
const post = require('./routes/post')
const cors = require("cors")
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
dotenv.config()
connectdb() 
app.use('/api/author',author)
app.use("/api/post",post)
app.post("/test",(req,res) =>
{
    console.log(req.body)
    
    res.end()
    
})
app.listen(8000,() =>
{
    console.log("port is runnig at 8000");

  
    

                          

})
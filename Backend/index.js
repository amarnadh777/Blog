const express = require('express')
const app = express()
const author = require('./routes/author')
const connectdb = require("./utils/mongoose")
const dotenv =require('dotenv')
const post = require('./routes/post')
const cors = require("cors")
app.use(cors())
dotenv.config()
connectdb() 
app.use('/api/author',author)
app.use("/api/post",post)
app.listen(8000,() =>
{
    console.log("port is runnig at 8000");

                          

})
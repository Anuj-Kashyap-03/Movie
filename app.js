const express = require('express')
const dotenv=require('dotenv')
const connectDatabase = require('./db/connection')
const ErrorMiddleware = require('./middlewares/Error')
const cookieParser = require('cookie-parser')
const path=require('path')


const app = express()


app.use(express.json())
app.use(cookieParser())

// importing routers
const  hindi  = require('./routers/hindirouter')
const  English  = require('./routers/Englishrouter.js')
const home=require('./routers/Home_router')
const search=require('./routers/Searchrouter')
const Moviedetails=require('./routers/Moviedetails')

  
dotenv.config({path:'./config/confige.env'})
connectDatabase()


// using routers 
app.use('/api/home',home)
app.use('/api',English)
app.use('/api',hindi,search)
app.use('/api/movie',Moviedetails)

app.use(express.static(path.join(__dirname,'Client/build')))

app.get('*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'Client/build/index.html'))
})

app.use(ErrorMiddleware)

app.listen(process.env.PORT,()=>{
    console.log('listiong sucessful')
})
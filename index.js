const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const MainRouter=require('./routes/mainroute')


//initialize:

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/', MainRouter)

//

const Mongourl='mongodb://localhost:27017/Mernprojectreal';
mongoose.connect(Mongourl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err)
    console.log('Yes connected to mongo')
    else
    console.log('Not connected')
})
app.listen(3001,()=>console.log('Running server on 3001'))

const express=require('express')
const route=express.Router()
const User=require('../model/user')
const Blog=require('../model/postModel')



//Register route
route.post('/register', (req,res)=>{
    let register=new User(req.body)
    register.save()
    .then((err,docs)=>{
        if(err)
        res.send(err)
        else
        res.send('successfully registered')
    })
})
// login route

route.post('/login', (req,res)=>{
    User.findOne({email:req.body.email})
    .then(found=>{
        console.log('user exists')
        if(found.password==req.body.password){
            res.send("1")
        }else{
            res.send("0")
        }
    })
    .catch(err=>res.send('User Not Found'))
})

//post retreival route

route.get('/posts', (req,res)=>{
    Blog.find((err,data)=>{
        if(err)
        res.json(err)
        else
        res.json(data)
    })
})

// add post route

route.post('/add-post', (req,res)=>{
    let adding=new Blog(req.body)
    adding.save((err,docs)=>{
        if(err){
            res.json('try again')
        }
            else{
            res.json('Post has been added')// saved on data
            }
        
    })
   
})


module.exports=route
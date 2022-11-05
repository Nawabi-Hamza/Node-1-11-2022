const { json } = require("express")
const express = require('express')
var { ObjectId } = require("mongodb")
const {conectToDb,getDb} = require('./db')
const app = express()
// app can have these methode .get/post/delete/patch/put
let db
conectToDb((err)=>{
    if(!err){
        app.listen(2020,()=>{
            console.log("app listened on port 3000")
        })
        db = getDb()
    }
})
// app.get('/',(req,res)=>{
//     res.send("This is the home page")
// })
app.get('/blog',(req,res)=>{
    var posts = []
    db.collection('Blog').find().sort({name:1})
    .forEach((post)=> {posts.push(post)})
    .then(()=>{
        res.status(200).json(posts)
    })
    .catch(()=>{
        res.status(500).json({err:"Something Went wrong"})
    })
})

var Mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
Mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Connected to database")
    var dbo = db.db("FirstDayOfMount")
    // var obj = [
    //     {name:"zoooo",age:11,phone:"078827337"},
    //     {name:"shoes",age:21,phone:"078832137"},
    //     {name:"phone",age:32,phone:"078127337"},
    //     {name:"PC",age:19,phone:"078827309"},
    //     {name:"Zeib",age:23,phone:"078826785"},
    //             ]
    var obj = {name:"PC",age:19, phone:"078827309"}
    var updateObj = {$set:{age:0}}
    dbo.collection("Blog").updateOne(obj,updateObj,(err,res)=>{
        // console.log("User Added in Data Base")
        // console.log("User Deleted ")
        console.log("User Updated  ")
        db.close()
    })
   
})
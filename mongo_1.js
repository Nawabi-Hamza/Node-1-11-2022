const { ObjectId } = require("mongodb")
var Mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
Mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Connected to database")
    var dbo = db.db("FirstDayOfMount")
  
    // var obj = {_id:ObjectId('6360a8e862d0b9eec0e2c470')}
    // var updateObj = {$set:{age:false}}
    // dbo.collection("Blog").updateOne(obj,updateObj,(err,res)=>{
    //     console.log("User Updated by ID ")
    //     db.close()
    // })
     var deleteMulti = {name:/^z/}
     dbo.collection("Blog").deleteMany(deleteMulti,(err,res)=>{
        console.log("User Updated by ID ")
        db.close()
    })
   
})
const { ObjectId } = require("mongodb")
var Mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
Mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Connected to database")
    var dbo = db.db("FirstDayOfMount")
    var obj = {name:"Shafi",fname:"noori",phone:"0239043"}
    dbo.collection("Azizi").insertOne(obj,(err,res)=>{
        console.log("User added  ")
        db.close()
    })
})
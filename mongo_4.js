const { ObjectId } = require("mongodb")
var Mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
Mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Connected to database")
    var dbo = db.db("FirstDayOfMount")
    console.log("connected DB")
    dbo.collection("Azizi").drop((err,beDelete)=>{
        if(err) throw err;
        if(beDelete){
        console.log("user Deleted "+beDelete)}
        db.close()
    })
})
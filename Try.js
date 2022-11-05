const { Db } = require("mongodb")
var http = require("http")
var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"
MongoClient.connect(url,(err,db)=>{
   var dbo = db.db("FirstDayOfMount")
    dbo.collection("Blog").find().toArray((err,result)=>{
        http.createServer((err,res)=>{
            res.writeHead(200,{"content-type":"Application/json"})
            res.end(JSON.stringify(result))
        }).listen(3030,()=>{console.log("check the browser")})
        db.close()
    })
})

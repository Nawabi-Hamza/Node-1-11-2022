var {MongoClient} = require("mongodb")
 let dbConection
 module.exports = {
    conectToDb : (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/FirstDayOfMount')
        .then((client)=>{
            dbConection = client.db()
            return cb();
        })
        .catch((err)=>{
            console.log(err)
            return cb();
        })
    },
    getDb : ()=> dbConection
}
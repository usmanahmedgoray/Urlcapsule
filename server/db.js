const mongoose = require('mongoose');

const MongoURI =  "mongodb://127.0.0.1:27017/UrlShortner";

const ConnectToMongo = ()=>{
    mongoose.connect(MongoURI).then(()=>console.log('Connection to mongodb is successful'));
}
module.exports = ConnectToMongo;
const mongoose = require('mongoose');

const MongoSchema = mongoose.Schema({
    // Schema for save the Shortid 
    Shortid : {
        type : String,
        require : true,
    },
    // Schema for save the Redirect Url 
    RedirectUrl:{
        type : String
    },
    // Schema for save the visitHistory 
    visitHistory:[{timeStamp : {type:String}}]
})
 visitHistory= true;

const URLShortner = mongoose.model('urls',MongoSchema);
module.exports = URLShortner;
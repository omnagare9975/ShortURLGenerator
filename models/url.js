const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortID : {
        type : String,
        unique: true,
        required : true
    },
    redirectURL : {
        type: String,
        required : true
    },
    visitedHistory : [ { timestamps : {type : Number}}]
},
  {timestamps: true}
);


const urlModel = mongoose.model('urlModel' , urlSchema)


module.exports = {urlModel,}
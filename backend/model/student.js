const mongoose = require('mongoose')
 
var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Department:String,
    Mark:Number
})

var studentModel=mongoose.model("student",schema)
module.exports=studentModel
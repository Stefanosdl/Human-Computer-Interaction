var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
    title:{type:String,sparse:true},
    author:{type:String,sparse:true},
    isbn:{type:String,sparse:true},
    department:{type:String,sparse:true},
    lesson:{type:String,sparse:true},
    type:{type:String,sparse:true,default:"book"}
});

module.exports = mongoose.model('Book',BookSchema);

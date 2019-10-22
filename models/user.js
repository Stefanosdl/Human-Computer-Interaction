var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    password:String,
    username:{type:String, unique:true , sparse: true},
    tel:String,
    userType:String,
    university:String,
    department:String,
    address:String,
    county:String,
    zip:String,
    city:String,
    file:{
      fileType:String,
      idNumber:String,
      date:String,
      origination:String,
      passNumber:String
    },
    book: [{
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Book"
      },
      title: String,
      author: String,
      isbn: String
   }]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);

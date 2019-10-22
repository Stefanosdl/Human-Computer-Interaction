const express = require("express"),
    router = express.Router(),
    bodyParser = require("body-parser"),
    Book = require("../models/book"),
    User = require("../models/user"),
    middleware = require("../middleware/ware");


//ROOT ROUTE
router.get("/", function(req,res){
  res.render("student/student");
});

router.get("/stateBooks",function(req,res){
  Book.find({}, function(err,books){
    if(err){
      console.log(err);
    }
    else{
      res.render("student/stateBooks", {books: JSON.stringify(books)});
    }
  });
});

router.post("/stateBooks",middleware.isStudent, function(req,res){
  User.findById(req.user._id, function(err, user){
    if(err){
      console.log(err);
    }
    else{
      Book.findOne({isbn:req.body.book}, function(err, book){
        if(err){
          console.log(err);
        }
        else{
          var book = {
            id : book._id,
            title: book.title,
            author: book.author,
            isbn: book.isbn
          }
          User.find({"book.id": book.id}, function(err, exists){
            if(err){
              console.log(err);
            }
            else {
              if(exists.length > 0){
                req.flash("error", "Το σύγγραμμα είναι ήδη δηλωμένο!");
                res.redirect("back");
              }
              else {
                user.book.push(book);
                user.save();
                req.flash("success", "Επιτυχής δήλωση!");
                res.redirect("/student/statedBooks");
              }
            }
          });
        }
      });
    }
  });
});

router.get("/statedBooks",middleware.isStudent, function(req,res){
  res.render("statedBooks",{type: "student"});
});

router.get("/personalizedHelp", function(req,res){
    res.render("personalizedHelp",{type: "student"});
});
module.exports = router;

const express = require("express"),
    router = express.Router(),
    bodyParser = require("body-parser"),
    Book = require("../models/book"),
    User = require("../models/user"),
    middleware = require("../middleware/ware");


//ROOT ROUTE
router.get("/", function(req,res){
  res.render("provider/provider");
});

router.get("/recordBooks", function(req,res){
  Book.find({}, function(err,books){
    if(err){
      console.log(err);
    }
    else{
      res.render("provider/recordBooks");
    }
  });
});

router.post("/recordBooks",middleware.isProvider, function(req,res) {
  User.findById(req.user._id, function(err, user){
    if(err){
      console.log(err);
    }
    else {
      Book.find({$and:[{title: req.body.note.title},{type:{$ne:"book"}}]}, function(err, exists){
        if(err){
          console.log(err);
        }
        else{
          if(exists.length > 0){
            req.flash("error", "Το βοήθημα είναι ήδη δηλωμένο!");
            res.redirect("back");
          }
          else{
            Book.create(req.body.note, function(err, book){
              if(err){
                console.log(err);
              }
              else{
                book.type = "notes";
                book.save();
                user.book.push(book);
                user.save();
                req.flash("success", "Επιτυχής καταχώρηση!");
                res.redirect("/provider/statedBooks");
              }
            });
          }
        }
      });
    }
  });
});

router.get("/statedBooks",middleware.isProvider, function(req,res){
  res.render("statedBooks",{type: "provider"});
});

router.get("/personalizedHelp", function(req,res){
    res.render("personalizedHelp",{type: "provider"});
});

module.exports = router;

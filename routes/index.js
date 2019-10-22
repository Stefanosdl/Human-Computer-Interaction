const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("../models/user"),
    Book = require("../models/book"),
    DistributionPoint = require("../models/distributionPoint"),
    middleware = require("../middleware/ware");


//ROOT ROUTE
router.get("/", function(req,res){
  res.render("index");
});

//LOGIN ROUTE
router.get("/login", function(req, res) {
   res.render("login", {page: "login"});
});


//login logic
router.post("/login", passport.authenticate("local",
    {
        failureRedirect: "/login",
        failureFlash:"Το username ή ο κωδικός είναι λάθος!",
    }),function(req,res){
        User.findOne({username: req.body.username}, function(err, user){
            res.redirect(req.session.returnTo);
        });
});

//REGISTER ROUTE
router.get("/register", function(req,res){
  res.render("register", {page: "register"});
});

//REGISTER student ROUTE
router.get("/registerStudent", function(req,res){
  res.render("registerStudent", {page: "registerStudent"});
});

//create student
router.post("/registerStudent", function(req,res){
    var newUser;
    newUser = new User({firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, tel: req.body.tel, userType:"student",
                        university: req.body.university, department: req.body.department});
    User.register(newUser, req.body.password, function(err, user){
      if(err){
        console.log(err);
        req.flash("error", err.message);
        return res.render("registerStudent", {error: err.message});
      }
      passport.authenticate("local")(req, res,function(){
          req.flash("success", "Επιτυχής εγγραφή!");
          res.redirect("/");
      });
   });
});

//REGISTER PROVIDER ROUTE
router.get("/registerProvider", function(req,res){
  res.render("registerProvider", {page: "registerProvider"});
});

//create provider
router.post("/registerProvider", function(req, res) {
    var newUser;
    newUser = new User({firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, tel: req.body.tel, userType:"provider",
                        address: req.body.address, county: req.body.county, zip: req.body.zip,
                        file:{
                              fileType:req.body.type,
                              idNumber: req.body.id,
                              date: req.body.date,
                              origination: req.body.origination,
                              passNumber: req.body.pass
                            }
                        });
    User.register(newUser, req.body.password, function(err, user){
      if(err){
        console.log(err);
        req.flash("error", err.message);
        return res.render("registerProvider", {error: err.message});
      }
      passport.authenticate("local")(req, res,function(){
          req.flash("success", "Επιτυχής εγγραφή!");
          res.redirect("/");
      });
   });
});

router.get("/contact", function(req,res){
  res.render("contact");
});

router.get("/help", function(req,res){
  res.render("help");
});

router.get("/search", function(req,res){
  if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), "gi");
         Book.find({$or: [{title: regex}, {author: regex}, {isbn:regex}, {department: regex}, {lesson: regex}]}, function(err, allBooks){
           if(err){
             console.log(err);
           }
           else{
             DistributionPoint.find({$or: [{county: regex}, {city: regex}, {zip:regex}, {address:regex}]}, function(err, allDis){
               if(err){
                 console.log(err);
               }
               else{

                 User.find({
                   $and: [
                     { $or: [{firstname:regex}, {lastname:regex}, {tel:regex}]},
                     {userType:"publisher"}
                   ]},function(err, allPublishers){
                     if(err){
                       console.log(err);
                     }
                     else{
                        if(allBooks.length < 1 && allDis.length < 1 && allPublishers.length < 1){
                            req.flash("error", "Αυτό που ψάχνετε δεν υπάρχει");
                            res.redirect("/");
                        }else {
                          var results = allBooks.length + allDis.length + allPublishers.length;
                        res.render("search",{books:allBooks, dis:allDis, users:allPublishers, results: results});
                      }
                     }
                   });
               }
             });
           }
         });
    }else{
        req.flash("error", "Αυτό που ψάχνετε δεν υπάρχει");
        res.redirect("back");
    }
});

router.get("/browse", function(req,res){
  Book.find({}, function(err, allBooks){
    if(err){
      console.log(err);
    }
    else {
      DistributionPoint.find({}, function(err,allDis){
        if(err){
          console.log(err);
        }
        else {
          User.find({userType:"publisher"}, function(err,allUsers){
            if(err){
              console.log(err);
            }
            else{
              res.render("browse",{books:allBooks, dis:allDis, users:allUsers});
            }
          });
        }
      });
    }
  });
});



router.put("/profile",middleware.isLoggedIn, function(req,res){
  User.findByIdAndUpdate(req.user.id, req.body.user, function(err, updatedUser){
    if(err){
      req.flash("error", err.message);
      console.log(err);
      res.redirect("back");
    }
    else{
      var newUsername = req.body.username;

      updatedUser.setPassword(req.body.password, function(err){
        if(err){
          console.log(err);
        }
        else {
          updatedUser.username = newUsername;
          updatedUser.save(function(err){
            if(err){
              req.flash("error", err.message);
              res.redirect("back");
            }
            req.flash("success", "Η ενημέρωση των στοιχείων έγινε με επιτυχία!");
            res.redirect("back");
          });
        }
      });
    }
  });
});

router.get("/profile",middleware.isLoggedIn, function(req,res){
  User.findById(req.user.id,function(err,foundUser){
      if(err){
          console.log(err);
      }
      else{
          res.render("profile", {user: foundUser});
      }
  });
});

//logout
router.get("/logout",function(req,res){
    req.logout();
    req.flash("success","Επιτυχής αποσύνδεση");
    res.redirect("/");
});



function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}



module.exports = router;

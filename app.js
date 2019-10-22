const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user"),
    flash = require("connect-flash")
    seedDB = require("./seed.js");

const indexRoute = require("./routes/index");
const studentRoute = require("./routes/student");
const providerRoute = require("./routes/provider");

var url = "mongodb://localhost/Eudoxus";
mongoose.connect(url,{ useNewUrlParser: true });


mongoose.set('useCreateIndex', true);
mongoose.Promise = require('bluebird');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


app.use(require("express-session")({
    secret: "Whatever",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});
//Delete all entries
// seedDB();

app.use("/",indexRoute);
app.use("/student",studentRoute);
app.use("/provider",providerRoute);


app.get("*", function(req, res){
  res.render("404");
});

app.listen(3000, function(){
  console.log("Listening on port 3000...");
});

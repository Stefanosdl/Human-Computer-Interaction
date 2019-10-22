var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  req.flash("error", "Πρέπει να κάνεις login πρώτα!");
  res.redirect("/login");
}

middlewareObj.isStudent = function(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.userType == "student"){
            return next();
        }
        else{
            req.flash("error", "Πρέπει να είσαι συνδεδεμένος ως φοιτητής για να συνεχίσεις");
            res.redirect("back");
        }

    }else{
      req.flash("error", "Πρέπει να κάνεις login πρώτα!");
      req.session.returnTo = "/student" + req.path;
      res.redirect("/login");
    }
}

middlewareObj.isProvider = function(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.userType == "provider"){
            return next();
        }
        else{
            req.flash("error", "Πρέπει να είσαι συνδεδεμένος ως διαθέτης για να συνεχίσεις");
            res.redirect("back");
        }

    }else{
      req.flash("error", "Πρέπει να κάνεις login πρώτα!");
      req.session.returnTo = "/provider" + req.path;
      res.redirect("/login");
    }
}

module.exports = middlewareObj;

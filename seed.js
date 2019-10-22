var mongoose = require("mongoose");
var User = require("./models/user");
var Book = require("./models/book");
var DistributionPoint = require("./models/distributionPoint");




function seedDB(){
  Book.deleteMany({}, function(err){

  });
  DistributionPoint.deleteMany({},function(err){

  });
  User.deleteMany({}, function(err){

  });
  var students = [
    {
      firstname: "Στέφανος",
      lastname: "Διανέλλος",
      password: "1",
      username: "1",
      tel: "6900000000",
      userType: "student",
      university: "Καποδιστριακό",
      department: "Πληροφορική και Τηλεπικοινωνίες"
    },
    {
      firstname: "Αθηνά",
      lastname: "Βεκράκη",
      password: "2",
      username: "2",
      tel: "6911111111",
      userType: "student",
      university: "Καποδιστριακό",
      department: "Πληροφορική και Τηλεπικοινωνίες"
    }
  ]

  var publishers = [
    {
      firstname: "Κώστας",
      lastname: "Ζολιδός",
      password: "3",
      username: "3",
      tel: "6922222222",
      userType: "publisher",
      address: "Πανεπιστημίου 1",
      county: "Αττική",
      zip: "15555",
      city: "Αθήνα",
      file: {
        fileType: "passport",
        idNumber: "",
        date: "",
        origination: "",
        passNumber: "ΑΑ1111111"
      }
    },
    {
      firstname: "Δημήτρης",
      lastname: "Παπάγος",
      password: "4",
      username: "4",
      tel: "6933333333",
      userType: "publisher",
      address: "Ακαδημίας 1",
      county: "Αττική",
      zip: "15555",
      city: "Αθήνα",
      file: {
        fileType: "id",
        idNumber: "ΑΑ 111111",
        date: "1/1/1960",
        origination: "Τ.Α. Κερατσινίου",
        passNumber: ""
      }
    }
  ]

var providers = [
  {
    firstname: "Νίκος",
    lastname: "Νικολάου",
    password: "8",
    username: "8",
    tel: "6944444444",
    userType: "provider",
    address: "Σταδίου 1",
    county: "Αττική",
    zip: "15555",
    city: "Αθήνα",
    file: {
      fileType: "id",
      idNumber: "ΒΒ 222222",
      date: "2/2/1960",
      origination: "Τ.Α. Αργυρουπόλεως",
      passNumber: ""
    }
  },
  {
    firstname: "Ηλίας",
    lastname: "Κωνσταντίνου",
    password: "9",
    username: "9",
    tel: "6955555555",
    userType: "provider",
    address: "Ιπποκράτους 1",
    county: "Αττική",
    zip: "15555",
    city: "Αθήνα",
    file: {
      fileType: "passport",
      idNumber: "",
      date: "",
      origination: "",
      passNumber: "ΒΒ22222222"
    }
  }
]

  var books = [
    {
      title: "Η επιστήμη των υπολογιστών",
      author: "Ιωάννης Ιωάννου",
      isbn: "978-978-978-978-0",
      department: "Πληροφορική και Τηλεπικοινωνίες",
      lesson: "Εισαγωγή στην πληροφορική"
    },
    {
      title: "Εισαγωγή στην ανόργανη χημεία",
      author: "Παναγιώτης Παναγιώτου",
      isbn: "977-977-977-977-0",
      department: "Χημικό",
      lesson: "Ανόργανη Χημεία"
    }
  ]

  var distributionpoints = [
    {
      county: "Αθήνα",
      city: "Αιγάλεω",
      zip: "15666",
      address: "Παπανδρέου 1"
    },
    {
      county: "Αθήνα",
      city: "Κεραμεικός",
      zip: "15777",
      address: "Πειραιώς 1"
    }
  ]

  students.forEach(function(student){
    User.register(student,student.password, function(err,user){
      if(err){
        console.log(err);
      }
    });
  });

  publishers.forEach(function(publisher){
    User.register(publisher,publisher.password, function(err,publisher){
      if(err){
        console.log(err);
      }
    });
  });

  providers.forEach(function(provider){
    User.register(provider,provider.password, function(err,provider){
      if(err){
        console.log(err);
      }
    });
  });

  books.forEach(function(book){
    Book.create(book, function(err){
      if(err){
        console.log(err);
      }
    });
  });

  distributionpoints.forEach(function(distributionpoint){
    DistributionPoint.create(distributionpoint, function(err){
      if(err){
        console.log(err);
      }
    });
  });

}

module.exports = seedDB;

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");


// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index', {});
  });

  app.get("/groups", function(req, res) {
    var allGroups = {}
    db.Group.findAll({}).then(function(dbGroups){
      console.log(dbGroups)
      allGroups.group = dbGroups
    })
    res.render('manageGroup', allGroups);
  });
  

  app.get("/signUp", function(req, res) {
    res.render('signUp', {});
  });

  app.get('/inventories', function(req, res) {
    res.render('inventories', {});
  })






  // app.get("/groups", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/manageGroup.html"));
  // });

  // app.get('/groups', function(req, res) {
  //   db.group.findAll({}).then(function(data){
  //     var groupObj = {
  //       groups : data
  //     }
  //     console.log(groupObj)
  //   })
  //   res.render('manageGroup', groupObj);
  // })




  // app.get("/groups", function(req, res) {
  //   group.all(function(data){
  //     var groupsObject = {
  //       groups: data
  //     }
  //     console.log(groupsObject);
  //     res.sendFile(path.join(__dirname, "../public/manageGroup.html", groupsObject))
  //   })
  // });

  // app.get('/groups', function(req, res) {
  //   // perform a findall w/ the Group model
  //   var groups = {};
  //   db.Group.findAll({
  //     where: groups
  //   }).then(function(groups) {
  //   res.render("manageGroup", groups);
  // })

  // app.get('/createGroup', function(req, res) {
  //   console.log('blah!!!!!!!!!!!!!!')
  // })
  // app.get('/groups', function(req, res) {
  //   res.render('groups', {});
  // })
  // app.get('/groups', function(req, res) {
  //   res.render('groups', {});
  // })

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });



  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  }

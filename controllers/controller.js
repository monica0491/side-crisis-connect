// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index', {});
  });

  app.get("/signup", function(req, res) {
    res.render('signup', {});
  });

  // app.get("/groups", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/manageGroup.html"));
  // });

  app.get('/pollo', function(req, res) {
    res.render('pollo', {});
  })

  app.get('/groups', function(req, res) {
    res.render('manageGroup', {});
  })

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
  //   res.render('manageGroup', {});
  // })
  app.get('/createGroup', function(req, res) {
    console.log('blah!!!!!!!!!!!!!!')
  })
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

};

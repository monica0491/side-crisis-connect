const path = require("path");
const express = require("express");
const router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");



  router.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("home")
  });

  router.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login")
  });
  router.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup")
  });
  
  router.get("/addgroup", function(req, res){
    res.render("addgroup")
  });

  router.get("/groupname", function(req, res){
    res.render("groupname")
  });


  router.get("/groupadmin", function(req, res){
    res.render("groupadmin")
  });

  router.get("/groupname", function(req, res){
    res.render("groupname")
  });


  router.get("/members", function(req, res){
    res.render("members")
  });


  router.get("/deletegroup", function(req, res){
    res.render("deletegroup")
  });


  router.get("/updategroup", function(req, res){
    res.render("updategroup")
  });


  router.get("/product", function(req, res){
    res.render("product")
  });

  
  router.get("/productowner", function(req, res){
    res.render("productowner")
  });


  router.get("/productname", function(req, res){
    res.render("productname")
  });


  router.get("/productcategory", function(req, res){
    res.render("productcategory")
  });


  router.get("/productdescription", function(req, res){
    res.render("productdescription")
  });


  router.get("/quantityinstock", function(req, res){
    res.render("quantityinstock")
  });


  router.get("/logout", function(req, res){
    res.render("logout")
  });
  



  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

module.exports = router;
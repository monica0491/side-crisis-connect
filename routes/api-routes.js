// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Groups API Routes

  app.get("/api/group", function(req, res){
    db.Group.findAll({}).then(function(group){
      res.json(group);
    })
  })
  
  app.post("/api/group", function(req, res){
    db.Group.create({
      group_name: req.body.group_name,
      admin_id: req.body.admin_id
    }).then(function(group){
      res.json(group)
    })
  })

  app.put("/api/group", function(req, res){
    db.Group.update({
      group_name: req.body.group_name,
      admin_id: req.body.admin_id
    },
    {
      where: {
        id: req.body.id
      }
    }).then(function(group){
      res.json(group)
    })
  })

  app.delete("/api/group", function(req, res){
    db.Group.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(group){
      res.json(group)
    })
  })

//Inventory API Routes

  app.get("/api/inventory", function(req, res){
    db.Inventory.findAll({}).then(function(items){
      res.json(items);
    })
  })
  
  app.post("/api/inventory", function(req, res){
    db.Inventory.create({
      product_owner: req.body.product_owner,
      product_name: req.body.product_name,
      product_category: req.body.product_category,
      product_description: req.body.product_description,
      quantity_in_stock: req.body.quantity_in_stock
    }).then(function(items){
      res.json(items)
    })
  })

  app.put("/api/inventory", function(req, res){
    db.Inventory.update({
      quantity_in_stock: req.body.quantity_in_stock
    },
    {
      where: {
        id: req.body.id
      }
    }).then(function(items){
      res.json(items)
    })
  })

  app.delete("/api/inventory", function(req, res){
    db.Inventory.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(items){
      res.json(items)
    })
  })
};

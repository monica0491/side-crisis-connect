// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/signUp", function(req, res) {
    db.User.create({
      username: req.body.username,
    })
      .then(function() {
        // res.redirect(307, "/groups");
        res.json(true)
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  //Groups API Routes

  app.get('api/groups', function(req, res) {
    // perform a findall w/ the Group model
    db.Group.findAll({})
    .then(function(groups) {
    res.render("manageGroup", groups);
  })
  })
  
  app.post("/api/groups", function(req, res){
    db.Group.create({
      group_name: req.body.group_name,
      admin_id: req.body.admin_id
    })
    .then(function(group){
      res.json(group)
    })
  })

  app.delete("/api/groups", function(req, res){
    db.Group.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(group){
      res.render("manageGroup", group)
    })
  })
}





// //Inventory API Routes

//   app.get("/api/inventory", function(req, res){
//     db.Inventory.findAll({}).then(function(items){
//       res.json(items);
//     })
//   })
  
//   app.post("/api/inventory", function(req, res){
//     db.Inventory.create({
//       product_owner: req.body.product_owner,
//       product_name: req.body.product_name,
//       product_category: req.body.product_category,
//       product_description: req.body.product_description,
//       quantity_in_stock: req.body.quantity_in_stock
//     }).then(function(items){
//       res.json(items)
//     })
//   })

//   app.put("/api/inventory", function(req, res){
//     db.Inventory.update({
//       quantity_in_stock: req.body.quantity_in_stock
//     },
//     {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(items){
//       res.json(items)
//     })
//   });

//   app.delete("/api/inventory"function(req, res){
//     db.Inventory.destroy({
//       where: {
//         id: req.body.id
//       }
//     }).then(function(items){
//       res.json(items)
//     })
//   })


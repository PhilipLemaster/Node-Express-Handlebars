const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.read(function(data) {
        var hbsObject = {
            burgers: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    burger.post(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured], 

      function() {
        res.redirect('/');
      });
});

router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
      }, 
      condition, function() {
      res.redirect('/')
    });
});

router.delete("/burgers/delete/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;
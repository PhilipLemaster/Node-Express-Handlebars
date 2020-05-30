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

router.post('/api/burgers', function(req, res) {
    burger.post(
        ["burger_name", "devoured"], 
        [req.body.burger_name, '0'], 

      function() {
        res.redirect('/');
      });
});

router.put("/api/burgers/:id", function(req, res) { 
    console.log("Working");
  
    burger.update(req.params.id, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } 
      else {
        res.status(200).end()
      }
    })
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } 
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;
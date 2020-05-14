const orm = require('../config/orm');

const burger = {
    read: function() {
        orm.selectAll();
    },
    
    post: function() {
        orm.insertOne();
    },
  
    update: function() {
      orm.updateOne();
  }
};

module.exports = burger;

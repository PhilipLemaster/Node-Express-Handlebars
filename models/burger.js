const orm = require('../config/orm');

const burger = {
    read: function(cb) {
        orm.get('burgers', function(res) {
            cb(res);
        });
    },
    
    post: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
  
    update: function(id, cb) {
        let condition = 'id=' + id;
        orm.update('burgers', {devoured: true}, condition, function(res) {
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete('burgers', condition, function(res) {
            cb(res);
        });
      }
};

module.exports = burger;

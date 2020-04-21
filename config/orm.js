var connection = require('./connection')

let orm = {
    selectAll: function() {
        let queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    insertOne: function(burgerName) {
        let queryString = 'INSERT INTO burgers (name) VALUES (?)';
        connection.query(queryString, [burgerName], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    updateOne: function(burgerId) {
        let queryString = "UPDATE burgers SET devoured = 'true' WHERE id = ?";
        connection.query(queryString, [burgerId], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;
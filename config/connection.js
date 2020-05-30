const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
    const connection = mysql.createConnection({
        host: 'vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'fyx3otew0scinpqe',
        password: 'xs2z9u1mtksnevkn',
        database: 'au34h9cchf2c6p98'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log('Running Server...')
})

module.exports = connection;
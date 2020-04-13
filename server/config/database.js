require("dotenv").config();
const Sequelize = require("sequelize");


//Creates a Sequelize instance and sets the database config
const sequelize = new Sequelize("luxury","root", "", {
    host: "localhost",
    dialect: "mysql",
    // socketPath: '/var/run/mysqld/mysqld.sock'
});

module.exports = sequelize;


// mysql://bfe6ddfaaeab71:bc027240@us-cdbr-iron-east-05.cleardb.net/heroku_1ef6f32a34d8bf1?reconnect=true
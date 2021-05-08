const config = require("../config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
  }
);

const db = {};

// Assign Sequelize Lib & sequelize instance
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Listing model
db.books = require("./books.js")(sequelize, Sequelize);
db.author = require('./author')(sequelize, Sequelize)

module.exports = db;
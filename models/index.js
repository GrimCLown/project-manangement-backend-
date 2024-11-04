// models/index.js
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

const db = {};

// Initialize Sequelize
let sequelize;
if (config.use_env_variable) {
  // If `use_env_variable` is specified, use it to connect to the database
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Otherwise, connect using individual config parameters
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Read through all files in the models directory and import each model
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && // Exclude hidden files
      file !== basename &&       // Exclude this file (index.js)
      file.slice(-3) === '.js'   // Include only .js files
    );
  })
  .forEach((file) => {
    console.log(`Attempting to load model file: ${file}`); // Add this line for debugging
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


// Set up model associations if they exist
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Attach sequelize and Sequelize to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object containing all models and the sequelize instance
module.exports = db;

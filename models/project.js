// models/project.js
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'projects',
      timestamps: false
    });
  
    return Project;
  };
  
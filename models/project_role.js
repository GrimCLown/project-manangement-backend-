// models/project_role.js
module.exports = (sequelize, DataTypes) => {
    const ProjectRole = sequelize.define('ProjectRole', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'project_roles',
      timestamps: false
    });
  
    return ProjectRole;
  };
  
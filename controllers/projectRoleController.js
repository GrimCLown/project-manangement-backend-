// controllers/projectRoleController.js
const db = require('../models');
const ProjectRole = db.ProjectRole;

exports.getAllProjectRoles = async (req, res) => {
  try {
    const roles = await ProjectRole.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving project roles', error });
  }
};

// Other CRUD methods (get, create, update, delete) can be added similarly

// controllers/projectController.js
const db = require('../models');
const Project = db.Project;

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error });
  }
};

// Other CRUD methods (get, create, update, delete) can be added similarly

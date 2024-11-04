// routes/projects.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
// Other routes (POST, GET by ID, PUT, DELETE) can be added similarly

module.exports = router;

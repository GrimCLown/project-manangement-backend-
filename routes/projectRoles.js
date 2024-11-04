// routes/projectRoles.js
const express = require('express');
const router = express.Router();
const projectRoleController = require('../controllers/projectRoleController');

router.get('/', projectRoleController.getAllProjectRoles);
// Other routes (POST, GET by ID, PUT, DELETE) can be added similarly

module.exports = router;

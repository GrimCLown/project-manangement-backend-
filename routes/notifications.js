// routes/notifications.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/', notificationController.getAllNotifications);
// Other routes (POST, GET by ID, PUT, DELETE) can be added similarly

module.exports = router;

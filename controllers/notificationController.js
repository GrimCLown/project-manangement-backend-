// controllers/notificationController.js
const db = require('../models');
const Notification = db.Notification;

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving notifications', error });
  }
};

// Other CRUD methods (get, create, update, delete) can be added similarly

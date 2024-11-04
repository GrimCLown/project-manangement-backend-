// controllers/activityLogController.js
const db = require('../models');
const ActivityLog = db.ActivityLog;

exports.getAllActivityLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.findAll();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving activity logs', error });
  }
};

// Other CRUD methods (get, create, update, delete) can be added similarly

// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

const activityLogRoutes = require('./routes/activityLogs');
app.use('/api/activity_logs', activityLogRoutes);

const notificationRoutes = require('./routes/notifications');
app.use('/api/notifications', notificationRoutes);

const projectRoleRoutes = require('./routes/projectRoles');
app.use('/api/project_roles', projectRoleRoutes);

const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

db.sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error synchronizing the database:', error);
  
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

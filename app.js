const express = require('express');
const mongoose = require('mongoose');
const app = express();
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/carManagement', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

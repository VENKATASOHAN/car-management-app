const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// User login
router.get('/login', (req, res) => {
  res.render('login', { title: 'User Login' });
});

router.post('/login', async (req, res) => {
  // Implement user login logic
});

// View cars
router.get('/cars', async (req, res) => {
  const cars = await Car.find();
  res.render('dashboard', { cars, title: 'Available Cars' });
});

module.exports = router;

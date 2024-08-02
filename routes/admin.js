const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware for admin authentication
router.use((req, res, next) => {
  // Authentication logic (simplified)
  next();
});

// Admin login
router.get('/login', (req, res) => {
  res.render('login', { title: 'Admin Login' });
});

router.post('/login', async (req, res) => {
  // Implement login logic
});

// CRUD Operations
router.post('/cars', async (req, res) => {
  const car = new Car(req.body);
  await car.save();
  res.redirect('/admin/dashboard');
});

router.get('/cars', async (req, res) => {
  const cars = await Car.find();
  res.render('dashboard', { cars, title: 'Admin Dashboard' });
});

router.put('/cars/:id', async (req, res) => {
  await Car.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/admin/dashboard');
});

router.delete('/cars/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.redirect('/admin/dashboard');
});

// Dashboard
router.get('/dashboard', async (req, res) => {
  const cars = await Car.find();
  res.render('dashboard', { cars, title: 'Admin Dashboard' });
});

module.exports = router;

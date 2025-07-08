// routes.js
const express = require('express');
const router = express.Router();
const data = require('../database/data.json'); // If you're using a JSON database

// Home route (for "/")
router.get('/', (req, res) => {
  res.render('index', { index: data.index }); // Pass your data to EJS
});

router.get('/cenovnik', (req, res) => {
  res.render('cenovnik', { cenovnik: data.cenovnik }); // Pass your data to EJS
});

router.get('/kontakt', (req, res) => {
  res.render('kontakt', { cards: data }); // Pass your data to EJS
});

router.get('/omeni', (req, res) => {
  res.render('omeni', { cards: data }); // Pass your data to EJS
});

// Add other routes if needed
// router.get('/about', (req, res) => {
//   res.render('about');
// });

module.exports = router;

// routes.js
const express = require('express');
const router = express.Router();
const data = require('../database/data.json'); // If you're using a JSON database
const download = require('../controllers/download');
const results = require('../controllers/search')

// Home route (for "/")
router.get('/', (req, res) => {
  res.render('index', { index: data.index }); // Pass your data to EJS
});

router.get('/cenovnik', (req, res) => {
  res.render('cenovnik', { cenovnik: data.cenovnik }); // Pass your data to EJS
});

router.post('/search', (req, res) => {

  console.log(req.body);
    const userInput = req.body.query;
   
    const result = results.getResults(userInput);
   

    res.render('results', { result }); 

});
router.get("/download", download.download);


// Add other routes if needed
// router.get('/about', (req, res) => {
//   res.render('about');
// });

module.exports = router;

const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
// Route
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);




app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

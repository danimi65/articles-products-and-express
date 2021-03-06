//jshint esversion: 6

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const products = require('./routes/products');
const articles = require('./routes/articles');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/products', products);
  console.log('this line');

app.use('/articles', articles);




app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports = app; 
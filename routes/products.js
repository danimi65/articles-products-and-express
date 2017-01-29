//jshint esversion: 6
const express = require('express');
const router = express.Router();
const products = require('../db/products');


let id = 0;


router.get('/', (req, res) => {
  products.getAllProducts()
    .then( result => {
    console.log(result);
    res.render('index', {productList : result});
    })
    .catch(err => {
    console.log('error');
    });
});


router.get('/new', (req, res) => {
  res.render('new');
});
 
router.get('/:id/edit', (req, res) => {
  console.log('why dont you work');
  var productId = req.params.id;
  res.render('edit', products.getProduct(productId));
});
 

router.post('/', (req, res) => {
  var newProduct = req.body;
  products.add(newProduct)
  .then(result => {
   res.redirect(303, '/products');
   console.log(result);
  })
  .catch(err => {
  console.log('error', err);
  });
});

router.get('/:id', (req, res) => {
  var productId = req.params.id;
  console.log('router', productId);
  products.getProduct(productId)
    .then( result => {
    console.log(result);
    res.render('products.hbs', {productList : result});
  })
  .catch(err => {
    console.log('error');

  });
  // res.render('products', products.getProduct(parseInt(req.params.id)));
});

router.put('/:id', (req, res) => {
  console.log('hello put');
  let newProduct = req.body;
  let productToChange = products.getProduct(parseInt(req.params.id));

  if(newProduct.hasOwnProperty('name')){
    productToChange.name = newProduct.name;
  }
  if(newProduct.hasOwnProperty('price')){
    productToChange.price = newProduct.price;
  }
  if(newProduct.hasOwnProperty('inventory')){
    productToChange.inventory = newProduct.inventory;
  }

  res.redirect(303, '/products/'+ req.params.id);

});


router.delete('/:id', (req, res) => {
  console.log('hello delete');
  products.deleteProduct(parseInt(req.params.id));


  res.redirect(303, '/products');
 
});




module.exports = router; 
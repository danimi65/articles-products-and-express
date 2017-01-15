//jshint esversion: 6
const express = require('express');
const router = express.Router();
const products = require('../db/products');



let id = 0;


router.get('/', (req, res) => {

  res.render('index', {
    productList : products.getAllProducts()
  });
});

router.post('/', (req, res) => {
  let newProduct = {};
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.inventory = req.body.inventory;
    newProduct.id = id;
    // console.log(products);
    products.add(newProduct);
    id ++;
  }
    res.redirect('/products');

});

router.get('/:id', (req, res) => {
  res.render('products', products.getProduct(parseInt(req.params.id)));
});

router.put('/:id', (req, res) => {
  console.log('hello put');
  let newProduct = req.body;
  let productToChange = products.getProduct(parseInt(req.params.id));
  console.log(productToChange);

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
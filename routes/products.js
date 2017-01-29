//jshint esversion: 6
const express = require('express');
const router = express.Router();
const products = require('../db/products');


let id = 0;


router.get('/', (req, res) => {
  products.getAllProducts(req,res);
});


router.get('/new', (req, res) => {

  res.render('new');
});
 
router.get('/:id/edit', (req, res) => {
  console.log('why dont you work');
  res.render('edit', products.getProduct(req.params.id));
});
 

router.post('/', (req, res) => {
  products.add(req, res);

});

router.get('/:id', (req, res) => {
  res.render('products', products.getProduct(parseInt(req.params.id)));
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
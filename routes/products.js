//jshint esversion: 6
const express = require('express');
const router = express.Router();
const products = require('../db/products');



let id = 0;


router.get('/', (req, res) => {

  res.render('index', {productList:products.inventoryList});
});

router.post('/', (req, res) => {
  console.log('hello');
  let newProduct = {};
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.inventory = req.body.inventory;
    newProduct.id = id;
    console.log(products);
    // productsArray.push(newProduct);
    products.add(newProduct);
    id ++;
  }
    res.redirect('/products');

});




module.exports = router; 
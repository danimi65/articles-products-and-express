//jshint esversion: 6
const express = require('express');
const router = express.Router();
const products = require('../db/products');


// let id = 0;


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
  products.postProduct(newProduct)
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
    console.log('get by error');
  });

});

router.put('/:id', (req, res) => {
  console.log('hello put');
  let productId = req.params.id;
  let changeProduct = req.body;
  products.putProduct(changeProduct, productId)
  .then(result => {
  res.redirect(303, '/products/'+ productId);
  })
  .catch(err => {
    console.log(err);
    console.log('put error');
  });



});


router.delete('/:id', (req, res) => {
  console.log('hello delete');
  let productId = req.params.id;
  products.deleteProduct(productId)
    .then( result => {
    console.log(result);
  res.redirect(303, '/products');
  })
  .catch(err => {
    console.log('get by error');
  });

 
});




module.exports = router; 
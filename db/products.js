//jshint esversion:6

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products_express',
  user: 'danikaharada',
  password: PG_PASS
});



function getAllProducts(req, res){
 db.any('SELECT * FROM "products"')
  .then( result => {
    console.log(result);
    res.render('index', {productList : result});
  })
  .catch(err => {
    console.log('error');

  });
}

// function getProduct(id){
//   db.one(`SELECT ${id} FROM products WHERE id = ${id}`);
// }

// let inventoryList = [];


function add(req, res){
  const name = req.body.name;
  const price = req.body.price;
  const inventory = req.body.inventory;
  db.any(`INSERT INTO "products" (name, price, inventory) VALUES ('${name}', ${price}, ${inventory}
    )`)
  .then(result => {
     res.redirect(303, '/products');
    console.log(result);
  })
  .catch(err => {
    console.log('error', err);
  });

}







// function deleteProduct(productId){
//    for(var i = 0; i < inventoryList.length; i++){
//     if(inventoryList[i].id === productId){
//       inventoryList.splice(inventoryList.indexOf(inventoryList[i]),1);

//     }
//   }

// }



module.exports = {
  getAllProducts: getAllProducts,
  add: add
  // getProduct: getProduct
  // deleteProduct: deleteProduct

};
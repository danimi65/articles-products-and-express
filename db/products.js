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



function getAllProducts(){
  return db.any('SELECT * FROM "products"');
}

function getProduct(productId){
  console.log(productId);
  return db.one(`SELECT * FROM "products" WHERE products.id = ${productId}`);

}


function postProduct(newProduct){
  return db.none(`INSERT INTO "products" (name, price, inventory) VALUES ('${newProduct.name}', ${newProduct.price}, ${newProduct.inventory}
    )`);
}

function putProduct(changeProduct){
  let QuerySelector = "";
  let name = products.name;
  let price = products.price;
  let inventory = products.inventory;
}



function deleteProduct(productId){
  return db.none(`DELETE FROM "products" WHERE products.id = ${productId}`);

}



module.exports = {
  getAllProducts: getAllProducts,
  postProduct: postProduct,
  getProduct: getProduct,
  putProduct: putProduct,
  deleteProduct: deleteProduct

};
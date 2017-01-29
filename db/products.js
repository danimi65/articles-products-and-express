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


function add(newProduct){
  return db.any(`INSERT INTO "products" (name, price, inventory) VALUES ('${newProduct.name}', ${newProduct.price}, ${newProduct.inventory}
    )`);
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
  add: add,
  getProduct: getProduct
  // deleteProduct: deleteProduct

};
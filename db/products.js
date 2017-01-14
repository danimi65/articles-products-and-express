//jshint esversion:6
let inventoryList = [];

function getAllProducts(){
  return inventoryList;
}

function add(obj){
  inventoryList.push(obj);

}

module.exports = {
  getAllProducts: getAllProducts,
  add: add

};
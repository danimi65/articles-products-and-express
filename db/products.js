//jshint esversion:6

let inventoryList = {
  "productList":[]
};

function add(obj){
  inventoryList.productList.push(obj);

}

module.exports = {
  inventoryList: inventoryList,
  add: add

};
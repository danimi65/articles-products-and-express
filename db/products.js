//jshint esversion:6

let inventoryList = [];

function add(obj){
  inventoryList.push(obj);

}

module.exports = {
  inventoryList: inventoryList,
  add: add

};
//jshint esversion:6

let inventoryList = [];

function getAllProducts(){
  return inventoryList;
}

function add(obj){
  inventoryList.push(obj);

}

function getProduct(id){
  for(var i = 0; i < inventoryList.length; i++){
    if(inventoryList[i].id === id){
      return inventoryList[i]; 

    }
    
  }
  return null;
}

function deleteProduct(productId){
   for(var i = 0; i < inventoryList.length; i++){
    if(inventoryList[i].id === productId){
      inventoryList.splice(inventoryList.indexOf(inventoryList[i]),1);

    }
  }

}



module.exports = {
  getAllProducts: getAllProducts,
  add: add,
  getProduct: getProduct,
  deleteProduct: deleteProduct

};
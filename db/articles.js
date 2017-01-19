//jshint esversion:6

let articleList = [];

function getAllArticles(){
  return articleList;
}

function add(obj){
  articleList.push(obj);
}

function getArticle(title){
  for(var i = 0; i < articleList.length; i++){
    if(articleList[i].title === title){
      return articleList[i];
    }
  }
  return null;
}

module.exports = {
  getAllArticles: getAllArticles,
  add: add,
  getArticle: getArticle
};
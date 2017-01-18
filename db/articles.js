//jshint esversion:6

let articleList = [];

function getAllArticles(){
  return articleList;
}

function add(obj){
  articleList.push(obj);
}

module.exports = {
  getAllArticles: getAllArticles,
  add: add
};
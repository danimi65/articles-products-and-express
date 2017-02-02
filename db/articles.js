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


function getAllArticles(){
  return db.any('SELECT * FROM "articles"');
}

function postArticle(newArticle){
  return db.none(`INSERT INTO "articles" (title, body, author) VALUES ('${newArticle.title}', '${newArticle.author}', '${newArticle.body}')`);
}

function getArticle(articleTitle){
  console.log(articleTitle);
  return db.one(`SELECT * FROM "articles" WHERE  articles.title = ${articleTitle}`);
}

function deleteArticle(articleTitle){
  return db.none(`DELETE FROM "articles" WHERE articles.title = ${articleTitle}`);
}

module.exports = {
  getAllArticles: getAllArticles,
  postArticle: postArticle,
  getArticle: getArticle,
  deleteArticle: deleteArticle

};
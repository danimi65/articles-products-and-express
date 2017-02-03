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

function getArticle(articleId){
  console.log(articleId);
  return db.one(`SELECT * FROM "articles" WHERE  articles.id = ${articleId}`);
}

function deleteArticle(articleId){
  return db.none(`DELETE FROM "articles" WHERE articles.id = ${articleId}`);
}

function putArticle(newArticle, articleId){
  return db.none(`UPDATE "articles" SET 
    title = '${newArticle.title}',
    author = '${newArticle.author}',
    body = '${newArticle.body}'`);

}

module.exports = {
  getAllArticles: getAllArticles,
  postArticle: postArticle,
  getArticle: getArticle,
  deleteArticle: deleteArticle,
  putArticle : putArticle

};
//jshint esversion:6
const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

router.get('/', (req, res) => {
  articles.getAllArticles()
  .then( result => {
    console.log(result);
  res.render('index', {articleList : result});
  })
  .catch(err => {
    console.log(' get error');
  });
});



router.get('/new_article', (req, res) => {
  res.render('new_article');
});

router.get('/:title', (req, res) => {
  res.render('articles', articles.getArticle(encodeURI(req.params.title)));
});

router.get('/:title', (req, res) => {
  res.render('articles', articles.getArticle(encodeURI(req.params.title)));
});

router.post('/', (req, res) => {
  var newArticle = req.body;
  articles.postArticle(newArticle)
  .then(result => {
  res.redirect(303, '/articles');
    console.log(result);
  })
  .catch(err => {
    console.log('post error', err);
  });
});

router.put('/:title/edit', (req, res) => {
  console.log('hello articles put');
  let newArticle = req.body;
  let articleToChange = articles.getArticle(req.params.title);
 
  if(newArticle.hasOwnProperty('author')){
    articleToChange.author = newArticle.author;
  }
  if(newArticle.hasOwnProperty('body')){
    articleToChange.body = newArticle.body;
  }

  res.redirect(303, `/articles/${req.params.title}`);

});

module.exports = router;
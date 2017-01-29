//jshint esversion:6
const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

router.get('/', (req, res) => {
  res.render('index', {
    articleList : articles.getAllArticles()
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
  let newArticle = {};
  if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('author')){
    newArticle.title = req.body.title;
    newArticle.body = req.body.body;
    newArticle.author = req.body.author;
    newArticle.titleUrl = encodeURIComponent(req.body.title);
    articles.add(newArticle);

  }
  res.redirect('/articles');
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

  res.redirect(303, `/articles/${req.params.titleUrl}`);

});

module.exports = router;
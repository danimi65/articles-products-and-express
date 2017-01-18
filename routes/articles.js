//jshint esversion:6
const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

router.get('/', (req, res) => {
  res.render('index', {
    articleList : articles.getAllArticles()
  });

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

module.exports = router;
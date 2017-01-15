//jshint esversion:6
const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

router.get('/', (res, req) => {
  res.render('index', {
    articleList : articles.getAllArticles()
  });

});

let titleUrl;

router.post('/', (req, res) => {
  let newArticle = {};
  if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('authory')){
    newArticle.title = req.body.title;
    newArticle.body = req.body.body;
    newArticle.author = req.body.author;
    newArticle.titleUrl = titleUrl;

  }
});
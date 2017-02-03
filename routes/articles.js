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

router.get('/:id', (req, res) => {
  let articleId = req.params.id;
  articles.getArticle(articleId)
  .then(result => {
    console.log(result);
  res.render('articles.hbs', {articleList : result});
  })
  .catch(err => {
    console.log('get article error', err);
  });
});

router.get('/:id/edit', (req, res) => {
  let articleId = req.params.id;
  articles.getArticle(articleId)
  .then(result => {
  res.render('edit_article', {articleList : result});
  })
  .catch(err => {
    console.log('get article edit error', err);
  });
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

router.put('/:id/edit', (req, res) => {
  let articleId = req.params.id;
  let changeArticle = req.body;
  articles.putArticle(changeArticle, articleId)
  .then(result => {
  res.redirect(303, '/articles/' + articleId);
  console.log(result);  
  })
  .catch(err => {
    console.log('put error', err);
  });
});

module.exports = router;
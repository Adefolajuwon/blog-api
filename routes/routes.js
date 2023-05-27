const { Router } = require('express');
const express = require('express');
const { author } = require('../controllers/authorControllers');
const { comment } = require('../controllers/commentControllers');
const { blog, ViewCount } = require('../controllers/blogControllers');
const { newLike } = require('../controllers/likesController');

const router = express.Router();

// author route
router.post('/author', author);
//blog route
router.post('/blog', blog);
//comment route
router.post('/comment', comment);

router.get('/blog/:id/like', newLike);
// views route
router.get('/blog/views', ViewCount);
module.exports = router;

const { Router } = require('express');
const express = require('express');
const { author } = require('../controllers/authorControllers');
const { comment } = require('../controllers/commentControllers');
const { blog } = require('../controllers/blogControllers');
const router = express.Router();

router.post('/author', author);
router.post('/blog', blog);
router.post('/comment', comment);
module.exports = router;

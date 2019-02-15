const router = require('express').Router();
const post = require('../../../app/controllers/posts')
router.post('/createPost',post.createPost);
router.post('/updatePost',post.updatePost);
router.get('/getPosts',post.getPosts)
module.exports = router

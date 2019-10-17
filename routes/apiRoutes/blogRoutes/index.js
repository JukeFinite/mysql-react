const router = require('express').Router();
const blogController = require('./../../../controllers/blogsController');



// /api/blogs
router.route('/')
    .get(blogController.getBlogs)
    .post(blogController.createBlog)




module.exports = router;
const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
// /api  prepended to every route declared in here
// /api/blog
router.use('/blog', blogRoutes);

// /api/comment
router.use('/comments', commentRoutes);

module.exports = router;

const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('Comments are hit');
})

// /api
module.exports = router;
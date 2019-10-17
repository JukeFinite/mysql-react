const router = require('express').Router();
const connection = require('./../../../config/connection');
// /api/blog

router.get('/', (req, res) => {
    const query = `SELECT * FROM blogs;`;
    connection.query(query, (err, blogs) => {
        if(err) {
            return res.status(404).send(err);
        }
        res.json(blogs);
    });
});

module.exports = router;
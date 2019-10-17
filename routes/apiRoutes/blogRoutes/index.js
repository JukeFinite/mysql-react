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

router.post('/', (req, res) => {
    const { blog } = req.body;
    const query = `INSERT INTO blogs (blog) VALUES(?)`;
    connection.query(query, blog, (err, response) => {
        if(err) {
            return res.status(403).send(err);
        }
        res.send(response); 
    });
});

module.exports = router;
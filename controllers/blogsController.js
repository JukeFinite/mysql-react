const connection = require('./../config/connection');

module.exports = {
    getBlogs: (req, res) => {
        const query = `SELECT * FROM blogs;`;
        connection.query(query, (err, blogs) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(blogs);
        });
    },
    createBlog: (req, res) => {
        const { blog } = req.body;
        const query = `INSERT INTO blogs (blog) VALUES(?)`;            
        connection.query(query, blog, (err, response) => {
            if(err) {
                return res.status(403).send(err);
            }
            res.send(response); 
        });
    }
};
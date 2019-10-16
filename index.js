const express = require('express');

const PORT = process.env.NODE_ENV || 3001;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => console.log('Port started on port: ' + PORT));
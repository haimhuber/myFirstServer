
const express = require('express');
const app = express();
const port = 3001;
let user = {
    1: "Haim",
    2: "Yotam",
    3: "Jhoony"
};

app.use(express.static('public'));
app.use(express.json()); // parse body of POST requests

app.get('/hello', (req, res) => {
    console.log(req.query);
    console.log(req.query.article);
    console.log(req.query.subject);
    res.send(`You sent a query param named article, with value = ${req.query.article}   And subject with value = ${req.query.subject}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


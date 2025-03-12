
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

app.get('/users/:userId', (req, res) => {
    console.log(req.params);
    console.log(req.params.userId);
    res.send(`You requested user with Id = ${req.params.userId}`);
});

app.get('/users/:userId/:carIndex', (req, res) => {
    console.log(req.params);
    console.log(req.params.userId);
    console.log(req.params.carIndex);
    res.send(`You requested the car number ${req.params.carIndex} of user with Id = ${req.params.userId}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


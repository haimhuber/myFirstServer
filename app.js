
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


// 3.1
app.get('/hello', (req, res) => {
    res.send('hello world');
});
// 3.2
app.get('/date', (req, res) => {
    res.send(new Date().toLocaleDateString());
});
// 3.3
app.get('/random', (req, res) => {
    res.send(Math.floor(Math.random() * (2000)).toString());
});
// 3.4
app.post('/echo', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received', data: req.body });
});
// 3.5
app.get('/users', (req, res) => {
    res.json(user);
});
// 3.6
app.get('/status', (req, res) => {
    res.send('Server is ruuning');
});
// 3.7
app.post('/message', (req, res) => {
    res.json({ message: 'Message received!' });
    console.log('Message received!')
});
// 3.8
app.delete(`/item/:userId`, (req, res) => {
    res.send(`User ${req.params.userId} deleted!`)
});

// 3.9
app.put(`/item/:userId`, (req, res) => {
    res.json({ data: req.body });
});

// 3.10
app.get('/items', (req, res) => {
    res.json({ item1: "iPhone 13", item2: "iPhone 14" });
});

// 3.11
app.get('/contact', (req, res) => {
    res.json({ Name: "Haim Or Huber", email: "haimhuber90@gmail.com", Mobile: "0533351459" });
});





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


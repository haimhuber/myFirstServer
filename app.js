
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
    res.redirect("/my-other-route");
});

app.get('/my-other-route', (req, res) => {
    res.send("hi from other route");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


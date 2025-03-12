
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

app.use(express.urlencoded({ extended: true }));

app.post('/hello', (req, res) => {
    console.log(`all params:  ${JSON.stringify(req.body)}`);
    console.log(req.body.firstname);
    res.send(`<p>You sent a params<br>firstname, with value = ${req.body.firstname}<br>
        lastname, with value ${req.body.lastname}</p>`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


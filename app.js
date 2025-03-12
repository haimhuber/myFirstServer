
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

//--------------------------------------------------------
//--- Getting params from a POST as 'x-www-url-encoded' --
// for encoded bodies (usually coming from forms)
//   (if it was encoded with: application/x-www-urlencoded)
app.use(express.urlencoded({ extended: true }));
// the "use" above will create dictionary (object)
// with all the params and store it in req.body
//--------------------------------------------------------

app.post('/hello', (req, res) => {
    console.log(`all params:  ${JSON.stringify(req.body)}`);
    console.log(req.body.firstname);
    res.send(`You sent a param named firstname, with value = ${req.body.firstname}\n lastname, with value = ${req.body.lastname}\n Age, with value ${req.body.age} `);
});

app.get('/hello', (req, res) => {
    res.send(`<p>You sent a param named firstname, with value = ${req.query.firstname}<br>lastname, with value = ${req.query.lastname}<br>Age, with value ${req.query.age}</p> `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


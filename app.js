
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

//-------- send json from a file using express --------
const path = require('path');
app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, './users.json'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


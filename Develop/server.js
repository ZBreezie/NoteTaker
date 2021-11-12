const express = require('express');
const { notes } = require('./db/db');
const path = require('path');


const app = express();

// Set port to 3001
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
// Parse json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
  });





// Specify to /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Default to main page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// Default to main page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
    console.log(`Connected to server on port ${PORT}!`);
});
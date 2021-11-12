const express = require('express');
const { notes } = require('./db/db');
const path = require('path');
const fs = require('fs');

const app = express();

// Set port to 3001
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
// Parse json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Function to create new note
function createNote(body, notesArray) {
    console.log(body);
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// Get note json data
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Post json data
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});


// Route to /notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Default to main page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
    console.log(`Connected to server on port ${PORT}!`);
});
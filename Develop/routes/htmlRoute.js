const path = require('path');
const router = require('express').Router();

// Specify to /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Default to main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Default to main page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
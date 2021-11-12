const express = require('express');

// Attach html routing
const htmlRoute = require('./routes/htmlRoute');


const app = express();

// Set port to 3001
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));

// Parse data as json
app.use(express.json());


app.use(express.static('public'));
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Connected to server on port ${PORT}!`);
});
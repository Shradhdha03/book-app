const express = require('express');
const path = require('path');
const books = require('./books.json');
const app = express();

var os = require('os');

var networkInterfaces = os.networkInterfaces();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a list of books
app.get('/api/books', (req, res) => {
    res.json({ networkInterfaces: networkInterfaces, books: books });
});

const port = process.env.PORT || 80;
app.listen(port);
console.log('App is listening on port ' + port);
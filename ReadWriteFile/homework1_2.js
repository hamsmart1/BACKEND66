const express = require('express');
const app = express();
const port = 3000;

// Route for /about
app.get('/about', (req, res) => {
    res.send('This is about page.');
});

// Route for /users2
app.get('/users2', (req, res) => {
    res.json([
        { id: 1, firstname: 'Somchai', lastname: 'Jaidee' },
        { id: 2, firstname: 'Tony', lastname: 'Stark' },
    ]);
});

// Route for /my-json-api3
app.get('/my-json-api3', (req, res) => {
    res.json({ background: 'blue' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

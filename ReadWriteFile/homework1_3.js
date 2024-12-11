const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Route to read and display users.json
app.get('/read-users', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file.');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

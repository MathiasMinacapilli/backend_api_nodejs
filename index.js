const express = require('express');
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

// Server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
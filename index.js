const express = require('express');
const app = express();
const port = 3000;

/* Middleware */
// Static files
app.use(express.static('public'));

// Routes
/* 
Routes can be:
.get
.post
.put
.delete
*/
app.get('/', (req, res) => res.send('Hello World!'))

// Server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
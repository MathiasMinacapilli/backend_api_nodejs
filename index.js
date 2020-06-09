const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

/* Middleware */
// Static files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
/* 
Routes can be:
.get
.post
.put
.delete
*/
app.get('/', (req, res) => res.send({ code: 200, message: 'Welcome home!' }))

app.route('/user').get(function (req, res) {
    const response = {
        code: 200,
        message: 'Showing user'
    }
    res.send(response)
}).post(function (req, res) {
    const response = {
        code: 200,
        message: 'Creating user'
    }
    res.send(response)
}).delete(function (req, res) {
    const response = {
        code: 200,
        message: 'Deleting user'
    }
    res.send(response)
});

app.route('/user/:userId').get(function (req, res) {
    let response = {
	    code: 400,
	    message: 'The user does not exist',
    }
    console.log(req.params);
    if (req.params.userId === '1') {
        response.code = 200;
	    response.message = `Returning user ${req.params.userId}`;
    }
    res.send(response);
});

app.use(function (req, res, next) {
    // 404 route
    const respuesta = {
        codigo: 404,
        mensaje: 'The page you are trying to enter does not exist!'
    };
    res.status(404).send(respuesta)
})

// Server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

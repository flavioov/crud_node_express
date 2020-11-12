const express = require('express');
const UserCotroller = require('./controllers/UserController')
const routes = express.Router();

routes.get('/users', UserCotroller.index)
routes.post('/users', UserCotroller.store)
routes.get('/', (req, res) => {
    res.send('Hello World');
});
module.exports = routes;
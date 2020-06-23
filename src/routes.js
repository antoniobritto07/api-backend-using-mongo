const express = require('express');
const PlayerController = require('./controllers/PlayerController');
const routes = express.Router();

routes.post('/player', PlayerController.create);
routes.get('/players', PlayerController.index);
routes.put('/player/:name', PlayerController.update);
routes.delete('/player/:name', PlayerController.delete);

module.exports = routes;
const { Router } = require('express');
const OngController = require('../controllers/OngController');

const routes = new Router();

routes.post('/ongs', OngController.store);

module.exports = routes;
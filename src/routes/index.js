const { Router } = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const OngController = require('../controllers/OngController');

const routes = new Router();

routes.get('/ongs', AuthMiddleware.verifyOng, OngController.index);
routes.post('/ongs', OngController.store);

module.exports = routes;
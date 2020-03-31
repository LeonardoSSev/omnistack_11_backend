const { Router } = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');

const routes = new Router();

routes.get('/ongs', AuthMiddleware.verifyOng, OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incidents', AuthMiddleware.verifyOng, IncidentController.index);
routes.post('/incidents', AuthMiddleware.verifyOng, IncidentController.store);

module.exports = routes;
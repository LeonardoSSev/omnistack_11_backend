const { Router } = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const SessionController = require('../controllers/SessionController');

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', OngController.store);
routes.get('/ongs', AuthMiddleware.verifyOng, OngController.index);

routes.get('/incidents', AuthMiddleware.verifyOng, IncidentController.index);
routes.post('/incidents', AuthMiddleware.verifyOng, IncidentController.store);
routes.delete('/incidents/:id', AuthMiddleware.verifyOng, IncidentController.destroy);

module.exports = routes;
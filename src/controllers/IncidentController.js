const IncidentService = require('../services/IncidentService');

module.exports = {
  async index(request, response) {
    const incidents = await IncidentService.findAll();

    return response.send(incidents);
  },

  async store(request, response) {
    const { title, description, value } = request.body;
    const ongId = request.headers.authorization;

    const incidentId = await IncidentService.store({ongId, title, description, value});

    return response.send(incidentId);
  }
}
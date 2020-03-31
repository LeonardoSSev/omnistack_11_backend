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
  },

  async destroy(request, response) {
    const { id } = request.params;
    const ongId = request.headers.authorization;

    const result = await IncidentService.destroyIncident(id, ongId);

    if (result) {
      return response.status(204).send();
    }

    return response.status(403).send('Só é possível excluir casos relacionados à mesma ONG.');
  }
}
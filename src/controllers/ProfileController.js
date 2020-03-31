const IncidentService = require('../services/IncidentService');

module.exports = {
  async index(request, response) {
    const ongId = request.headers.authorization;

    const selfIncidents = await IncidentService.findFromOng(ongId);

    return response.send(selfIncidents);
  }
}
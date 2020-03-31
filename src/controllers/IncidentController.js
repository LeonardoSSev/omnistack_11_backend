const IncidentService = require('../services/IncidentService');

module.exports = {
  async index(request, response) {
    const incidents = await IncidentService.findAll();

    return response.send(incidents);
  }
}
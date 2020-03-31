const IncidentRepository = require('../repositories/IncidentRepository');

module.exports = {
  async findFromOng(ongId) {
    return await IncidentRepository.findByOng(ongId)
  },

  async findAll() {
    return await IncidentRepository.findAll();
  },

  async store({ ongId, title, description, value }) {
    return await IncidentRepository.store({ ongId, title, description, value });
  },

  async destroyIncident(incidentId, ongId) {
    const incident = await IncidentRepository.findById(incidentId);

    if (incident.ong_id === ongId) {
      await IncidentRepository.delete(incident);

      return true;
    }

    return false;
  }
}
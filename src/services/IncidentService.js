const IncidentRepository = require('../repositories/IncidentRepository');

module.exports = {
  async findAll() {
    return await IncidentRepository.findAll();
  },

  async store({ ongId, title, description, value }) {
    return await IncidentRepository.store({ ongId, title, description, value });
  }
}
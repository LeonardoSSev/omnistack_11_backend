const IncidentRepository = require('../repositories/IncidentRepository');

module.exports = {
  async findAll() {
    return await IncidentRepository.findAll();
  }
}
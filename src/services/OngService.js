const crypto = require('crypto');
const OngRepository = require('../repositories/OngRepository');

module.exports = {
  async findOng(ongId) {
    return await OngRepository.findById(ongId);
  },
  
  async findAll() {
    return await OngRepository.findAll();
  },

  async storeOng({ name, email, whatsapp, city, uf }) {
    const ongId = crypto.randomBytes(4).toString('HEX');

    await OngRepository.store({ongId, name, email, whatsapp, city, uf});

    return ongId;
  }
}
const crypto = require('crypto');
const OngRepository = require('../repositories/OngRepository');

module.exports = {
  async storeOng({ name, email, whatsapp, city, uf }) {
    const ongId = crypto.randomBytes(4).toString('HEX');

    const [id] = await OngRepository.store({ongId, name, email, whatsapp, city, uf});

    return id;
  }
}
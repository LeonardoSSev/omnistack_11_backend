const connection = require('../database/connection');

module.exports = {
  findById(ongId) {
    return connection('ongs')
      .select('*')
      .where({ id: ongId })
      .first();
  },

  findAll() {
    return connection('ongs').select('*');
  },

  store({ongId, name, email, whatsapp, city, uf }) {
    return connection('ongs').insert({
      name,
      email,
      whatsapp,
      city,
      uf,
      id: ongId
    });
  }
};

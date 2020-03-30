const connection = require('../database/connection');

module.exports = {
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

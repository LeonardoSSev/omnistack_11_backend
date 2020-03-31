const connection = require('../database/connection');

module.exports = {
  findById(id) {
    return connection('incidents')
      .select('*')
      .where({
        id
      })
      .first();
  },

  findAll() {
    return connection('incidents').select('*');
  },

  store({ ongId, title, description, value }) {
    return connection('incidents').insert({
      title,
      description,
      value,
      ong_id: ongId
    });
  },

  delete(incident) {
    return connection('incidents').where('id', incident.id).delete();
  }
};

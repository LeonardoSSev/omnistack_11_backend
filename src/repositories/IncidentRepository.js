const connection = require('../database/connection');

module.exports = {
  findByOng(ongId) {
    return connection('incidents')
      .select('*')
      .where('ong_id', ongId);
  },

  findById(id) {
    return connection('incidents')
      .select('*')
      .where({
        id
      })
      .first();
  },

  findAll(limit, page) {
    return connection('incidents')
      .select('*')
      .limit(limit)
      .offset((page - 1) * limit);
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

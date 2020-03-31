const connection = require('../database/connection');

module.exports = {
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

  delete(id) {
    return connection('incidents').where({
      id
    })
    .del();
  }
};

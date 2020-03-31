const connection = require('../database/connection');

module.exports = {
  findAll() {
    return connection('incidents').select('*');
  }
};

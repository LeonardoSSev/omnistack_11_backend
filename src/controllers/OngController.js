const OngService = require('../services/OngService');

module.exports = {
  async index(request, response) {
    const ongs = await OngService.findAll();

    return response.send(ongs);
  },

  async store(request, response) {
    const ongId = await OngService.storeOng(request.body);

    return response.send({ id: ongId });
  }
}
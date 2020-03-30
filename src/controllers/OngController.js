const OngService = require('../services/OngService');

module.exports = {
  async store(request, response) {
    const ongId = await OngService.storeOng(request.body);

    return response.send({ id: ongId });
  }
}
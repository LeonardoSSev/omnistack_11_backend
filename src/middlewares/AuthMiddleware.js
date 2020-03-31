const OngService = require('../services/OngService');

module.exports = {
  async verifyOng(request, response, next) {
    const ongId = request.headers.authorization;

    if (!ongId) {
      response.status(401).send('Não foi encontrado nenhum id de ONG.');
    }

    const ong = await OngService.findOng(ongId);

    if (!ong) {
      response.status(401).send('Não foi encontrada nenhuma ong com o id fornecido');
    }

    next();
  }
}
const OngService = require('../services/OngService');

module.exports = {
  async store(request, response) {
    const { id } = request.body;

    const ong = await OngService.findOng(id);

    if (!ong) {
      response.status(400).send('Não foi encontrada nenhuma ong com o id fornecido');
    }

    return response.send(ong.name);
  }
}
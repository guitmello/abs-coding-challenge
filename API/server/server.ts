import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();
const server = http.createServer(Api);
const models = require('./models');

models.sequelize.sync().then(() => {
  server.listen(config.serverPort);
  server.on('listening', () => console.log(`Server rodando na porta ${config.serverPort}`));
  server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu o erro: ${error}`));
});

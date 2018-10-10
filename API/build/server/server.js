"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const api_1 = require("./api/api");
const config = require('./config/env/config')();
const server = http.createServer(api_1.default);
const models = require('./models');
models.sequelize.sync().then(() => {
    server.listen(config.serverPort);
    server.on('listening', () => console.log(`Server rodando na porta ${config.serverPort}`));
    server.on('error', (error) => console.log(`Ocorreu o erro: ${error}`));
});

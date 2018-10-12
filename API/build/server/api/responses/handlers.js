"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPStatus = require("http-status");
const config = require('../../config/env/config')();
class Handlers {
    onError(res, message, err) {
        console.log(`Error: ${err}`);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    }
    onSuccess(res, data) {
        res.status(HTTPStatus.OK).json({
            payload: data
        });
    }
    errorHandlerApi(err, req, res, next) {
        console.error(`API error handler executed: ${err}`);
        res.status(500).json({
            errorCode: 'ERR-001',
            message: 'Intern server error'
        });
    }
    dbErrorHandler(res, err) {
        console.log(`Erro: ${err}`);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            code: 'Err-01',
            messageUser: 'Create employee error',
        });
    }
}
exports.default = new Handlers();

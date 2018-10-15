import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';
const config = require('../../config/env/config')();


class Handlers {

  onError(res: Response, message: string, err: any) {
    console.log(`Error: ${err}`);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
  }

  onSuccess(res: Response, data: any) {
    res.status(HTTPStatus.OK).json({
      payload: data
    });
  }

  errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler executed: ${err}`);
    res.status(500).json({
      errorCode: 'ERR-001',
      message: 'Intern server error'
    });
  }

  dbErrorHandler(res: Response, err: any) {
    console.log(`Erro: ${err}`);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      code: 'Err-01',
      messageEmployee: 'Create employee error',
    });
  }
}

export default new Handlers();

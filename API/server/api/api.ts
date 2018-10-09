import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import Handlers from './responses/handlers';

class Api {

    public express: Application;
  
    constructor() {
      this.express = express();
      this.middleware();
    }
  
    middleware(): void {
      this.express.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
        
        if ('OPTIONS' === req.method) {
          res.sendStatus(200);
          return;
        }
  
        next();
      });
      this.express.use(bodyParser.urlencoded( { limit: "50mb", extended: true, parameterLimit:500000 } ));
      this.express.use(bodyParser.json({ limit: '50mb' }));
      this.express.use(Handlers.errorHandlerApi);
      this.router(this.express);
    }
  
    private router(app: Application): void {
      Routes.initRoutes(app);
    }
  }
  
  export default new Api().express;
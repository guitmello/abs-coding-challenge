"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const handlers_1 = require("./responses/handlers");
class Api {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
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
        this.express.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 500000 }));
        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.express.use(handlers_1.default.errorHandlerApi);
        this.router(this.express);
    }
    router(app) {
        routes_1.default.initRoutes(app);
    }
}
exports.default = new Api().express;

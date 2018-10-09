"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../../modules/Employee/routes");
class Routes {
    constructor() { }
    initRoutes(app) {
        //users routes
        app.route('/api/employees/').get(routes_1.default.index);
        app.route('/api/employees/').post(routes_1.default.create);
        app.route('/api/employees/:id').get(routes_1.default.findOne);
        app.route('/api/employees/:id/update').put(routes_1.default.update);
        app.route('/api/employees/:id/destroy').delete(routes_1.default.destroy);
    }
}
exports.default = new Routes();

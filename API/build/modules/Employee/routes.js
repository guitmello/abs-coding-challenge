"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class EmployeeRoutes {
    constructor() { }
    index(req, res) {
        return controller_1.default.getAll(req, res);
    }
    create(req, res) {
        return controller_1.default.createEmployee(req, res);
    }
    findOne(req, res) {
        return controller_1.default.getById(req, res);
    }
    update(req, res) {
        return controller_1.default.updateEmployee(req, res);
    }
    destroy(req, res) {
        return controller_1.default.deleteEmployee(req, res);
    }
}
exports.default = new EmployeeRoutes();

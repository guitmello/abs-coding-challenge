"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const handlers_1 = require("../../api/responses/handlers");
const service_1 = require("./service");
class EmployeeController {
    constructor() { }
    getAll(req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Error fetching all employees`));
    }
    getById(req, res) {
        const employeeId = parseInt(req.params.id);
        service_1.default.getById(employeeId)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Employee not found`));
    }
    createEmployee(req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, `Error inserting employee`));
    }
    updateEmployee(req, res) {
        const employeeId = parseInt(req.params.id);
        const props = req.body;
        service_1.default.update(employeeId, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Error updating employee`));
    }
    deleteEmployee(req, res) {
        const employeeId = parseInt(req.params.id);
        service_1.default.delete(employeeId)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Error deleting employee`));
    }
}
exports.default = new EmployeeController();

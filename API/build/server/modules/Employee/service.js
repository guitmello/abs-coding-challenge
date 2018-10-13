"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
const model = require('../../models');
class Employee {
    constructor() { }
    create(employee) {
        return model.Employee.create(employee);
    }
    getAll() {
        return model.Employee.findAll({
            order: ['id']
        })
            .then(interface_1.createEmployees);
    }
    getById(id) {
        return model.Employee.findOne({
            where: { id }
        });
    }
    update(id, employee) {
        return model.Employee.update(employee, {
            where: { id },
            fields: ['employee_name', 'employee_lastName', 'employee_participation'],
            hooks: true,
            individualHooks: true
        });
    }
    delete(id) {
        return model.Employee.destroy({
            where: { id }
        });
    }
}
exports.default = new Employee();

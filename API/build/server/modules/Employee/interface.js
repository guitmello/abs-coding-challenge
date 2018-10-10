"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createEmployee({ id, employee_name, employee_lastName, employee_participation }) {
    return {
        id,
        employee_name,
        employee_lastName,
        employee_participation
    };
}
exports.createEmployee = createEmployee;
function createEmployees(data) {
    return data.map(createEmployee);
}
exports.createEmployees = createEmployees;
function createEmployeeById({ id, employee_name, employee_lastName, employee_participation }) {
    return {
        id,
        employee_name,
        employee_lastName,
        employee_participation
    };
}
exports.createEmployeeById = createEmployeeById;

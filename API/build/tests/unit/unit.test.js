"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./config/helper");
const service_1 = require("../../server/modules/Employee/service");
const model = require('../../server/models');
describe('Controller Unit Tests', () => {
    //CREATE  
    describe('Create Method', () => {
        it('Must create a new employee', () => {
            return service_1.default.create({
                id: 1,
                employee_name: 'Teste',
                employee_lastName: 'New Employee',
                employee_participation: '50',
                createdAt: 10 / 10 / 2018,
                updatedAt: null,
            })
                .then(data => {
                helper_1.expect(data.dataValues).to.have.all.keys(['id', 'employee_name', 'employee_lastName', 'employee_participation', 'createdAt', 'updatedAt']);
            });
        });
    });
    //PUT
    describe('Update Method', () => {
        it('Must update a employee', () => {
            const employeeUpdate = {
                employee_name: 'Name'
            };
            return service_1.default.update(1, employeeUpdate).then(data => {
                helper_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    //GET ALL
    describe('GET Employees Method', () => {
        it('Must return a list with all employees', () => {
            return service_1.default.getAll().then(data => {
                helper_1.expect(data).to.be.an('array');
                helper_1.expect(data[0]).to.contains.keys('id', 'employee_name', 'employee_lastName', 'employee_participation');
            });
        });
    });
    //GET
    describe('GetById Method', () => {
        it('Must return one employee equals parameters id', () => {
            return service_1.default.getById(1).then(data => {
                helper_1.expect(data).to.have.property('id');
            });
        });
    });
    //DELETE
    describe('Delete Method', () => {
        it('Must delete a employee', () => {
            return service_1.default.delete(1).then(data => {
                helper_1.expect(data).to.be.equal(1);
            });
        });
    });
});

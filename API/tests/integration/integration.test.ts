import * as HTTPStatus from "http-status";
import { app, request, expect } from "./config/helper";
const model = require("../../server/models");

describe("Integration Tests", () => {

  "use strict";
  const config = require("../../server/config/env/config")();

  const employeeTest = {
    id: 1,
    employee_name: 'Employee',
    employee_lastName: 'Test',
    employee_participation: 10,
    createdAt: 10/10/2018,
    updatedAt: null,
  };

  const employeeDefault = {
    id: 2,
    employee_name: 'Employee',
    employee_lastName: 'Default',
    employee_participation: 50,
    createdAt: 10/10/2018,
    updatedAt: null,
  };

  //GET ALL
  describe('GET /api/employees', () => {
    it('Must return an array with all Employees', done => {
      request(app)
      .get('/api/employees')
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload).to.be.an('array');
        expect(res.body.payload[0].employee_name).to.be.equal(employeeDefault.employee_name);
        expect(res.body.payload[0].employee_lastName).to.be.equal(employeeDefault.employee_lastName);
        expect(res.body.payload[0].employee_participation).to.be.equal(employeeDefault.employee_participation);
        done(error);
      });
    });
  });

  //GET
  describe('GET /api/employees/:id', () => {
    it('Must return a json with just one employee', done => {
      request(app)
      .get(`/api/employees/${employeeDefault.id}`)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload.id).to.equal(employeeDefault.id);
        expect(res.body.payload).to.have.all.keys([
          'id', 'employee_name', 'employee_lastName', 'employee_participation', 'createdAt', 'updatedAt'
        ]);
        done(error);
      });
    });
  });

  //POST
  describe('POST /api/employees', () => {
    it('Must create a employee', done => {
      const employee = {
        id: 1,
        employee_name: 'Employee',
        employee_lastName: 'Tester',
        employee_participation: 15
      }
      request(app)
      .post('/api/employees')
      .send(employee)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload.id).to.eql(employee.id);
        expect(res.body.payload.employee_name).to.eql(employee.employee_name);
        expect(res.body.payload.employee_lastName).to.eql(employee.employee_lastName);
        expect(res.body.payload.employee_participation).to.eql(employee.employee_participation);
        done(error);
      });
    });
  });

  //PUT
  describe('PUT /api/employees/:id/update', () => {
    it('Must update a employee', done => {
      const employee = {
        employee_name: 'Teste',
        employee_lastName: 'Update Employee',
        employee_participation: '25',
      }
      request(app)
      .put(`/api/employees/${employeeTest.id}/update`)
      .send(employee)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload[0]).to.eql(1);
        done(error);
      });
    });
  });

  //DELETE
  describe('DELETE /api/employees/:id/destroy', () => {
    it('Must delete a employee', done => {
      request(app)
      .delete(`/api/employees/${employeeTest.id}/destroy`)
      .end((error, res) => {
        expect(res.status).to.equal(HTTPStatus.OK);
        expect(res.body.payload).to.eql(1);
        done(error);
      });
    });
  });

});

import { IEmployee, IEmployeeDetail, createEmployees } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Employee implements IEmployee {
    id: number;
    employee_name: string;
    employee_lastName: string;
    employee_participation: number;

  constructor(){}

  create(employee: any){
    return model.Employee.create(employee);
  }

  getAll(): Bluebird<IEmployee[]>{
    return model.Employee.findAll({
      order: ['id']
    })
    .then(createEmployees);
  }

  getById(id: number): Bluebird<IEmployeeDetail>{
    return model.Employee.findOne({
      where: { id }
    });
  }

  update(id: number, employee: any){
    return model.Employee.update(employee, {
      where: { id },
      fields: ['employee_name', 'employee_lastName', 'employee_participation'],
      hooks: true,
      individualHooks: true
    });
  }

  delete(id: number){
    return model.Employee.destroy({
      where: { id }
    });
  }
}

export default new Employee();

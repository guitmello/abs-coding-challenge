import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import Employee from './service';

class EmployeeController {

  constructor() {}

  getAll(req: Request, res: Response){
    Employee
      .getAll()
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Error fetching all employees`))
  }

  getById(req: Request, res: Response){
    const employeeId = parseInt(req.params.id);
    Employee.getById(employeeId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Employee not found`))
  }

  createEmployee(req: Request, res: Response){
    if ( typeof(req.body.employee_participation) !== 'string') {
      Employee
      .create(req.body)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.dbErrorHandler, res))
      .catch(_.partial(Handlers.onError, res, `Error inserting employee`));
    } else {
      res.status(HTTPStatus.BAD_REQUEST).send("Participação não é um número");
    }
    
  }

  updateEmployee(req: Request, res: Response){
    const employeeId = parseInt(req.params.id);
    const props = req.body;
    Employee.update(employeeId, props)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Error updating employee`))
  }

  deleteEmployee(req: Request, res: Response){
    const employeeId = parseInt(req.params.id);
    Employee.delete(employeeId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Error deleting employee`))
  }
}

export default new EmployeeController();

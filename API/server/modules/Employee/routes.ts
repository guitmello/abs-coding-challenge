import { Request, Response } from 'express';
import EmployeeController from './controller';

class EmployeeRoutes {

  constructor(){}

  index(req: Request, res: Response){
    return EmployeeController.getAll(req, res);
  }

  create(req: Request, res: Response){
    return EmployeeController.createEmployee(req, res);
  }

  findOne(req: Request, res: Response){
    return EmployeeController.getById(req, res);
  }

  update(req: Request, res: Response){
    return EmployeeController.updateEmployee(req, res);
  }

  destroy(req: Request, res: Response){
    return EmployeeController.deleteEmployee(req, res);
  }
}

export default new EmployeeRoutes();

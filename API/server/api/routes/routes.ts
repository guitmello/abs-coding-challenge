import { Application } from 'express';
import EmployeesRoutes from '../../modules/Employee/routes';

class Routes {
  
    constructor() {}
  
    initRoutes(app: Application): void {
  
      //users routes
      app.route('/api/employees/').get(EmployeesRoutes.index);
  
      app.route('/api/employees/').post(EmployeesRoutes.create);
  
      app.route('/api/employees/:id').get(EmployeesRoutes.findOne);
  
      app.route('/api/employees/:id/update').put(EmployeesRoutes.update);
  
      app.route('/api/employees/:id/destroy').delete(EmployeesRoutes.destroy);
      
    }
  }
  
  export default new Routes();
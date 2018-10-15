import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  newEmployee = new EventEmitter<Employee>();

  API_URL: string = environment.api;
  employees: Employee[] = [];
  employee: Employee;

  constructor(private http: HttpClient) { }

  // Get all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL}/employees`);
  }

  // Create a new employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.API_URL}/employees`, employee);
  }

  // Event to know which emoloyee was created
  employeeAdded(employee) {
    return this.newEmployee.emit(employee);
  }

}

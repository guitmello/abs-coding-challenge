import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response;
      this.getNewEmployee(this.employees);
    });
  }

  // Geting a new employee when created
  getNewEmployee(employees) {
    return this.employeeService.newEmployee.subscribe(employee => {
      employees.payload.push(employee.payload);
    });
  }

}

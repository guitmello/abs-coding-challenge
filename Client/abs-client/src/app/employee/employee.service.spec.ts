import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Employee } from './employee.model';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmployeeService],
    });

    employeeService = TestBed.get(employeeService);
    httpMock = TestBed.get(HttpClientTestingModule);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrive employees from API', () => {
    const testEmployees: Employee[] = [
      {
        id: 1,
        employee_name: 'Employee',
        employee_lastName: 'Test',
        employee_participation: 10
      },
      {
        id: 2,
        employee_name: 'Employee',
        employee_lastName: 'Default',
        employee_participation: 50
      },
    ];

    employeeService.getEmployees().subscribe(employees => {
      expect(employees.length).toBe(2);
      expect(employees).toEqual(testEmployees);
    });

    const request = httpMock.expectOne(`${employeeService.API_URL}/employees`);
    expect(request.request.method).toBe('GET');
    request.flush(testEmployees);
  });

  it('should sent data employee to API', () => {
    const testEmployee: Employee = {
        id: 1,
        employee_name: 'Employee',
        employee_lastName: 'Test',
        employee_participation: 10
      };

    employeeService.createEmployee(testEmployee).subscribe(employeeData => {
      expect(employeeData).toEqual(testEmployee);
    });

    const request = httpMock.expectOne(`${employeeService.API_URL}/employees`,
    '{id: 1, employee_name: "Employee", employee_lastName: "Test", employee_participation: 10}');
    expect(request.request.method).toBe('POST');
    request.flush(testEmployee);
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL: string = environment.api;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.API_URL + '/employees');
  }

  getEmployeesParticipations(): Observable<any> {
    return this.getEmployees().pipe(map(response => response.employee_participation));
  }

}

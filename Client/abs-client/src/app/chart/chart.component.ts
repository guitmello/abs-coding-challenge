import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Chart } from 'chart.js';
import { Employee } from '../employee/employee.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  employees: Employee[] = [];
  participations: any = [];
  employeesNames: any = [];
  chart: any;
  colors: any = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe(response => {
      this.employees = response;
      this.getParticipationChart(this.employees);
    });
  }


  getParticipationChart(employeeParam) {
    const employee = employeeParam.payload;

    employee.map(employees => this.participations.push(employees.employee_participation));
    employee.map(employees => this.employeesNames.push(`${employees.employee_name} ${employees.employee_lastName}`));
    employee.forEach(employeeColor => {
      this.colors.push(this.getRandomColor());
    });

    const canvas: HTMLElement = document.getElementById('canvas');
    this.chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.employeesNames,
        datasets: [
          {
            data: this.participations,
            backgroundColor: this.colors,
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        }
      }
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

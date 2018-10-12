import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  participations: [] = [];
  chart: any;

  constructor(private emploeeService: EmployeeService) {}

  ngOnInit() {
    this.getParticipationChart();
  }

  getParticipationChart() {
    this.emploeeService
      .getEmployeesParticipations()
      .subscribe(response => (this.participations = response));

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.participations,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
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

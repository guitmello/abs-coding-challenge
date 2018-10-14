import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Output() create = new EventEmitter();
  control: FormControl;

  employeeForm: FormGroup;
  numberPattern = /^[0-9]*$/;

  nameError = false;
  lastNameError = false;
  participationError = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      employee_name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      employee_lastName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      employee_participation: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.numberPattern)]
      })
    });
  }

  createEmployee(employee: Employee) {
      this.employeeService.createEmployee(employee).subscribe(employeeData => {
        this.employeeService.employeeAdded(employeeData);
        this.employeeForm.reset();
      },
        err => alert(err.error));
  }

  nameHasError() {
    if (this.employeeForm.controls['employee_name'].invalid) {
      return this.nameError = true;
    }
  }

  lastNameHasError() {
    if (this.employeeForm.controls['employee_lastName'].invalid) {
      return this.lastNameError = true;
    }
  }

  participationHasError() {
    if (this.employeeForm.controls['employee_participation'].invalid) {
      return this.participationError = true;
    }
  }

}

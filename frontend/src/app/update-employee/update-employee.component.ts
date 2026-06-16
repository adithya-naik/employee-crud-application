import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employee: Employee = new Employee();

  id!: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.employeeService
      .getEmployeeById(this.id)
      .subscribe(data => {

        this.employee = data;

      });

  }

  updateEmployee() {

    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe(data => {

        console.log(data);

        alert('Employee Updated Successfully');

      });

  }

}

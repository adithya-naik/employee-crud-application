import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  imports: [FormsModule,RouterModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,private router: Router) {}

  saveEmployee() {

    this.employeeService.createEmployee(this.employee)
      .subscribe({
        next: (data) => {

          console.log(data);

          alert("Employee Added Successfully");

          this.router.navigate(['/employees']);
        },

        error: (err) => {
          console.error(err);
          alert("Failed to create employee");
        }
      });

  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { Router,RouterModule } from '@angular/router';
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
    if (
      !this.employee.firstName ||
      !this.employee.lastName ||
      !this.employee.salary
    ) {
      alert('Please fill all fields');
      return;
    }
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

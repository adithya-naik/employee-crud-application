import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {}

  saveEmployee() {

    this.employeeService.createEmployee(this.employee).subscribe(data => {

      console.log(data);

      alert("Employee Added Successfully");

      this.employee = new Employee();

    });

  }
}

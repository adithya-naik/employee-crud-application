import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees : Employee[] = []
  filteredEmployees: Employee[] = [];
  searchText: string = '';
  constructor(private employeeService:EmployeeService) { }

  ngOnInit():void{
    this.getEmployee()
  }

  private getEmployee(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees = data;
      this.filteredEmployees = data;
    })
  }

  searchEmployee() {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployee();
    });

  }

}

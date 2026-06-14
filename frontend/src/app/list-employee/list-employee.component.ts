import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-list-employee',
  imports: [CommonModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees : Employee[] = []

  constructor(private employeeService:EmployeeService) { }

  ngOnInit():void{
    this.getEmployee()
  }

  private getEmployee(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    })
  }

}

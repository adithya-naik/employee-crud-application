import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(
      `${this.baseURL}/${id}`
    );
  }

<<<<<<< HEAD
  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

=======
  updateEmployee(
    id: number,
    employee: Employee
  ): Observable<Employee> {

    return this.httpClient.put<Employee>(
      `${this.baseURL}/${id}`,
      employee
    );

  }
>>>>>>> feature/update-employee
}

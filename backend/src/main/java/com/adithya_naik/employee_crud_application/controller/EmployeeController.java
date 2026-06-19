package com.adithya_naik.employee_crud_application.controller;

import com.adithya_naik.employee_crud_application.entity.Employee;
import com.adithya_naik.employee_crud_application.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<String> deleteEmployee(
            @PathVariable Integer id) {

        employeeRepository.deleteById(id);

        return ResponseEntity.ok(
                "Employee deleted successfully");
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(
            @PathVariable Integer id) {

        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow();

        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Integer id,
            @RequestBody Employee employeeDetails) {

        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow();

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setSalary(employeeDetails.getSalary());

        Employee updatedEmployee =
                employeeRepository.save(employee);

        return ResponseEntity.ok(updatedEmployee);
    }
}
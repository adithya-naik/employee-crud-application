import { Component } from '@angular/core';
import {ListEmployeeComponent} from './list-employee/list-employee.component';

@Component({
  selector: 'app-root',
  imports: [ListEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

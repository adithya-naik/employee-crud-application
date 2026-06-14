import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ListEmployeeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

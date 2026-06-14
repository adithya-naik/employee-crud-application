import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [

  {
    path: 'employees',
    component: ListEmployeeComponent
  },

  {
    path: 'create-employee',
    component: CreateEmployeeComponent
  },

  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  }

];

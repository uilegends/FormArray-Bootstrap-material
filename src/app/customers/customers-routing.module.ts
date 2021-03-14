import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-update-delete/add-customer/add-customer.component';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './view/customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'view',
        component: CustomersComponent
      },
      {
        path: 'add-customer',
        component: AddCustomerComponent
      },
      { path: '', redirectTo: 'view', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

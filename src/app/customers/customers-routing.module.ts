import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-update-delete/add-customer/add-customer.component';
import { CustomersComponent } from './view/customers.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

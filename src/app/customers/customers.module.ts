import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './view/customers.component';
import { AddCustomerComponent } from './add-update-delete/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CustomersModule { }

import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Observable<Customer>;

  constructor(private customerService: CustomerService) {
    this.getCustomers();
  }

  ngOnInit(): void {
  }

  getCustomers() {
    this.customers = this.customerService.getAllcustomers();
    // return this.customerService.getAllcustomers()
    //   this.customers = res;
    // });.subscribe(res => {
  }



}

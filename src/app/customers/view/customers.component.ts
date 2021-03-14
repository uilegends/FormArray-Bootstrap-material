import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private customerService: CustomerService) {
    this.getCustomers();
  }

  ngOnInit(): void {

  }

  getCustomers() {
    return this.customerService.getAllcustomers().subscribe(res => {
      this.customers = res;
    });
  }



}

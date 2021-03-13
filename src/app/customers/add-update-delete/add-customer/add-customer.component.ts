import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomer: FormGroup;
  items: FormArray;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addCustomer = this.fb.group({
      name: ['',],
      email: [''],
      address: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      city: [''],
      state: ['']
    });
  }

  addMoreItems() {
    this.items = this.addCustomer.get('address') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    if (index > 0) {
      const element = this.addCustomer.get('address') as FormArray;
      element.removeAt(index);
    }

  }

  saveCustomer() {
    if (this.addCustomer.value) {
      this.customerService.setCustomer = this.addCustomer.value;
    }
    this.router.navigate(['./customers']);
  }

}

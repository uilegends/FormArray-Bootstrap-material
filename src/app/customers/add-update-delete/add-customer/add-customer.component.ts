import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomer: FormGroup;
  items: FormArray;
  constructor(private fb: FormBuilder) { }

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
    const element = this.addCustomer.get('address') as FormArray;
    element.removeAt(index);
  }

  saveCustomer() {
    console.log(this.addCustomer.value);
  }

}

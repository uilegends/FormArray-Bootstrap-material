import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public data: string;

  constructor() { }

  get getCustomer(): string {
    return this.data;
  }

  set setCustomer(value: string) {
    this.data = value;
  }
}


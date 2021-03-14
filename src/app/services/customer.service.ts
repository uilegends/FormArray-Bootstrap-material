import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public data: string;

  constructor(private _http: HttpClient) { }

  createCustomer(customerData): Observable<any> {
    return this._http.post("http://localhost:3000/users/", customerData);
  }

  getAllcustomers(): Observable<any> {
    return this._http.get('http://localhost:3000/users/');
  }

  // Getter and Seter for holding values and showing without refresh
  get getCustomer(): string {
    return this.data;
  }
  set setCustomer(value: string) {
    this.data = value;
  }
}


import { Component, OnInit, Input } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  customers1: Customer[];

  customers2: Customer[];

  selectedCustomer1: Customer;

  selectedCustomer2: Customer;

  dataMarts: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomersMedium()
      .then((data) => (this.customers1 = data));
    this.customerService
      .getCustomersMedium()
      .then((data) => (this.customers2 = data));

    setTimeout(() => {
      this.getDataFromApi();
    }, 3000);
  }

  getDataFromApi() {
    console.log('get data from api');
    this.dataMarts = [];
    for (let i = 0; i < 150; i++) {
      this.dataMarts.push({
        Id: i,
        vin: 'Vin ' + Math.random(),
        year: 2000 + i,
        brand: 'Brand ' + i,
        color: 'Color ' + i,
      });
    }
  }
}
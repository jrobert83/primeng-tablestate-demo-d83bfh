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

  cols: any[];
  dataMarts: any[];
  first = 0;

  constructor(private customerService: CustomerService) {}

  
  ngOnInit() {
    this.cols = [
      { field: 'Id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];

    // this.customerService
    //   .getCustomersMedium()
    //   .then((data) => (this.customers1 = data));
    // this.customerService
    //   .getCustomersMedium()
    //   .then((data) => (this.customers2 = data));
    this.getDataFromApi();

    this.loop();
  }

  loop() {
    setTimeout(() => {
      this.getDataFromApi();
    }, 3000);
  }

  getDataFromApi() {
    console.log('get data from api');
    this.loop();
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

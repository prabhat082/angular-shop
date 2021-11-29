import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'db-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  productsRow: any;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  transformProducts(products: Product[]) {
    let index = 0;
    let length = products.length;
    let productsRow = [];

    //split array 3in row
    while (length) {
      let row: Product[] = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(products[index++]);
        }
        productsRow.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
          row.push(products[index++]);
        }
        productsRow.push(row);
      }
    }
    return productsRow
  }

  ngOnInit() {
    //subscribe route
    this.route.queryParams
      .debounceTime(300)// wait for 300ms pause in events
      .distinctUntilChanged() // only changed values pass
      .subscribe((params : any) => {
      let category: string = params['category'];
      let search: string = params['search'];

      // Clear view before request
      this.productsRow = [];

      // Return filtered data from getProducts function
      this.productService.getProducts(category, search)
        .subscribe((products: Product[]) =>
          // Transform products to appropriate data to display
          this.productsRow = this.transformProducts(products));
    })
  }

}
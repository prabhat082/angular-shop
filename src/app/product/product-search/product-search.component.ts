import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'db-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  disabled: boolean = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  searchProduct(search: string){
    this.router.navigate(['products'],{queryParams: {search: search}})
  }

  //
  // searchChanged(event: KeyboardEvent) {
  //
  //   // Get an input element
  //   let element: HTMLInputElement = <HTMLInputElement>event.target;
  //
  //   // Update the disabled property depends on value
  //   if ((element.value).trim()) {
  //     this.disabled = false
  //   } else {
  //     this.disabled = true
  //   }

  // }
}
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoryModule} from "../category/category.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {ProductSearchComponent} from "./product-search/product-search.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import {ProductService} from "./product.service";
import {ProductViewComponent} from './product-view/product-view.component';


@NgModule({
  imports: [
    CommonModule,
    CategoryModule,
    FormsModule,
    RouterModule,
  ],
  declarations:[
    ProductSearchComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductGridComponent,
    ProductViewComponent
  ],
  exports:[
    ProductSearchComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductGridComponent,
    ProductViewComponent
  ],
  providers: [ProductService]

})export class ProductModule{}
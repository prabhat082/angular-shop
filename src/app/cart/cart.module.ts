import {NgModule} from "@angular/core";
import {CartService} from "./cart.service";
import {CartMenuComponent} from "./cart-menu/cart-menu.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CartViewComponent} from './cart-view/cart-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CartMenuComponent,
    CartViewComponent
  ],
  exports: [
    CartMenuComponent,
    CartViewComponent
  ],
  providers: [CartService]
})
export class CartModule {
}
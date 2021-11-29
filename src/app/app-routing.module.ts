import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductViewComponent} from "./product/product-view/product-view.component";
import {CartViewComponent} from "./cart/cart-view/cart-view.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: "login", component: SignInComponent},
  {path: "register", component: SignUpComponent},
  { path: 'welcome', component: WelcomeComponent },
  {path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products/:id', component: ProductViewComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartViewComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]}
];

export const appRouting = RouterModule.forRoot(routes);
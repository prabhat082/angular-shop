import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CategoryModule} from "./category/category.module";
import {appRouting} from "./app.routing";
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {InMemoryDataService} from "./shared/in-memory-data.service";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";

import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {AuthService} from "./auth/auth.service";
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AuthGuard} from "./auth/auth.guard";


// Initialize Firebase
export const fbConfig = {
  apiKey: "AIzaSyBRcjZHOBpufc33mJ1ZX3Ur4ICs_i-ICnQ",
  authDomain: "simple-store-12e8e.firebaseapp.com",
  databaseURL: "https://simple-store-12e8e.firebaseio.com",
  projectId: "simple-store-12e8e",
  storageBucket: "simple-store-12e8e.appspot.com",
  messagingSenderId: "250747019841"
};

// Initialize Firebase Authentication
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Redirect
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    CheckoutComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CategoryModule,
    appRouting,
    ProductModule,
    CartModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}),
    AngularFireModule.initializeApp(fbConfig, myFirebaseAuthConfig)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

export interface NavItem {
  // Navigation link
  href: string;
  // Navigation Label
  label: string;
  // Status of Navigation Item
  active: boolean;
}

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeUser: string = null;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
    this.router.navigateByUrl("/login");
  }

  // App name
  appName: string = 'Dream Bean';

  // Navgation items
  navItems: NavItem[] = [
    {href: 'welcome', label: 'Home', active: true},
    {href: 'products', label: 'Products', active: false},
    {href: 'checkout', label: 'Checkout', active: false},
    // {href: 'login', label: 'Sign in', active: false}
  ];


}

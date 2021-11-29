import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from "../category/category.service";

@Component({
  selector: 'db-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  categories: Category[] = [];

  constructor( private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => this.categories = categories)
  }
}
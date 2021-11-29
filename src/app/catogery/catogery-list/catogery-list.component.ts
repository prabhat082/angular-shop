import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'db-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private router:Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe((categories: Category[]) => this.categories = categories)
  }

  filterProducts(category: Category) {
    this.router.navigate(['/products'], {
      queryParams: { category: category.id}
    });
  }
}
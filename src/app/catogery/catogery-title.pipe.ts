import {Pipe, PipeTransform} from '@angular/core';
import {CategoryService, Category} from "./category.service";
import {Observable} from "rxjs/Observable";

/*
 * Return category title of the value
 * Usage:
 *   value | categoryTitle
 * Example:
 *   {{ categoryId |  categoryTitle }}
 *   presume categoryId='1'
 *   result formats to 'Bread & Bakery'
 */

@Pipe({
  name: 'categoryTitle'
})
export class CategoryTitlePipe implements PipeTransform {
  category: Category;
  constructor(private categoryService: CategoryService) {
  }

  transform(value: string): string {
    this.categoryService.getCategory(value)
      .subscribe(category => this.category = category);
    return this.category ? this.category.title : '';
  }

}
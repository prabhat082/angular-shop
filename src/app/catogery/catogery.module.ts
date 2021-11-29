import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoryCardComponent} from "./category-card/category-card.component";
import {CategorySliderComponent} from "./category-slider/category-slider.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryService} from "./category.service";
import {CategoryTitlePipe} from './category-title.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoryCardComponent,
    CategorySliderComponent,
    CategoryListComponent,
    CategoryTitlePipe
  ],
  exports: [
    CategoryCardComponent,
    CategorySliderComponent,
    CategoryListComponent,
    CategoryTitlePipe
  ],
  providers: [CategoryService]
})
export class CategoryModule{}
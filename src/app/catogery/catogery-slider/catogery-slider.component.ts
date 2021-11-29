import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../category.service";

@Component({
  selector: 'db-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  @Input() category: Category;
  @Output() selected: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.selected.emit(this.category)
  }
}
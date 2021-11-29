import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogerySliderComponent } from './catogery-slider.component';

describe('CatogerySliderComponent', () => {
  let component: CatogerySliderComponent;
  let fixture: ComponentFixture<CatogerySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogerySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogerySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

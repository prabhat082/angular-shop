import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogeryListComponent } from './catogery-list.component';

describe('CatogeryListComponent', () => {
  let component: CatogeryListComponent;
  let fixture: ComponentFixture<CatogeryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogeryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogeryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

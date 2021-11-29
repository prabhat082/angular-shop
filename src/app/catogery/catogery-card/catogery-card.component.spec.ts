import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogeryCardComponent } from './catogery-card.component';

describe('CatogeryCardComponent', () => {
  let component: CatogeryCardComponent;
  let fixture: ComponentFixture<CatogeryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogeryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogeryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

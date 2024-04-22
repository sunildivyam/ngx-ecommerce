import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProductDetailComponent } from './choose-product-detail.component';

describe('ChooseProductDetailComponent', () => {
  let component: ChooseProductDetailComponent;
  let fixture: ComponentFixture<ChooseProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseProductDetailComponent]
    });
    fixture = TestBed.createComponent(ChooseProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

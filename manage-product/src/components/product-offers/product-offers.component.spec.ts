import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOffersComponent } from './product-offers.component';

describe('ProductOffersComponent', () => {
  let component: ProductOffersComponent;
  let fixture: ComponentFixture<ProductOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOffersComponent]
    });
    fixture = TestBed.createComponent(ProductOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

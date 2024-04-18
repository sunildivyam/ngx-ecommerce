import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryComponent } from './product-delivery.component';

describe('ProductDeliveryComponent', () => {
  let component: ProductDeliveryComponent;
  let fixture: ComponentFixture<ProductDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeliveryComponent]
    });
    fixture = TestBed.createComponent(ProductDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

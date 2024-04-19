import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDispatchComponent } from './product-dispatch.component';

describe('ProductDispatchComponent', () => {
  let component: ProductDispatchComponent;
  let fixture: ComponentFixture<ProductDispatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDispatchComponent]
    });
    fixture = TestBed.createComponent(ProductDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

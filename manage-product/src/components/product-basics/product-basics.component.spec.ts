import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBasicsComponent } from './product-basics.component';

describe('ProductBasicsComponent', () => {
  let component: ProductBasicsComponent;
  let fixture: ComponentFixture<ProductBasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBasicsComponent]
    });
    fixture = TestBed.createComponent(ProductBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

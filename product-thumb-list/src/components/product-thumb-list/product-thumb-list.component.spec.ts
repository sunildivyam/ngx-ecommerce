import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbListComponent } from './product-thumb-list.component';

describe('ProductThumbListComponent', () => {
  let component: ProductThumbListComponent;
  let fixture: ComponentFixture<ProductThumbListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductThumbListComponent]
    });
    fixture = TestBed.createComponent(ProductThumbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

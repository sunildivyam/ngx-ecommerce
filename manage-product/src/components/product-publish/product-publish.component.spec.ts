import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPublishComponent } from './product-publish.component';

describe('ProductPublishComponent', () => {
  let component: ProductPublishComponent;
  let fixture: ComponentFixture<ProductPublishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPublishComponent]
    });
    fixture = TestBed.createComponent(ProductPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

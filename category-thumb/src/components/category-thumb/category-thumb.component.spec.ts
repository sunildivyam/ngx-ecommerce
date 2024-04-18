import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryThumbComponent } from './category-thumb.component';

describe('CategoryThumbComponent', () => {
  let component: CategoryThumbComponent;
  let fixture: ComponentFixture<CategoryThumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryThumbComponent]
    });
    fixture = TestBed.createComponent(CategoryThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

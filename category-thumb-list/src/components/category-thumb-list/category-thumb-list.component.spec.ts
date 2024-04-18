import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryThumbListComponent } from './category-thumb-list.component';

describe('CategoryThumbListComponent', () => {
  let component: CategoryThumbListComponent;
  let fixture: ComponentFixture<CategoryThumbListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryThumbListComponent]
    });
    fixture = TestBed.createComponent(CategoryThumbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

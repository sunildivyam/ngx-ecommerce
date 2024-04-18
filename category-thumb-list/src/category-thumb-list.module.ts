import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryThumbListComponent } from './components/category-thumb-list/category-thumb-list.component';
import { CategoryThumbModule } from '@annuadvent/ngx-ecommerce/category-thumb/public-api';

@NgModule({
  declarations: [CategoryThumbListComponent],
  imports: [CommonModule, CategoryThumbModule],
  exports: [CategoryThumbListComponent]
})
export class CategoryThumbListModule {}

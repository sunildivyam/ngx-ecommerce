import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbListComponent } from './components/product-thumb-list/product-thumb-list.component';
import { ProductThumbModule } from '@annuadvent/ngx-ecommerce/product-thumb/public-api';

@NgModule({
  declarations: [ProductThumbListComponent],
  imports: [CommonModule, ProductThumbModule],
  exports: [ProductThumbListComponent]
})
export class ProductThumbListModule {}

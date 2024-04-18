import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbListComponent } from './components/product-thumb-list/product-thumb-list.component';
import { ProductThumbModule } from '@annuadvent/ngx-ecommerce/product-thumb/public-api';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';

@NgModule({
  declarations: [ProductThumbListComponent],
  imports: [CommonModule, ProductThumbModule, SmartButtonModule],
  exports: [ProductThumbListComponent]
})
export class ProductThumbListModule {}

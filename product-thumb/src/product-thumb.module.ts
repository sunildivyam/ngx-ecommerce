import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbComponent } from './components/product-thumb/product-thumb.component';
import { CardModule } from '@annuadvent/ngx-common-ui/card';

@NgModule({
  declarations: [ProductThumbComponent],
  imports: [CommonModule, CardModule],
  exports: [ProductThumbComponent],
})
export class ProductThumbModule {}

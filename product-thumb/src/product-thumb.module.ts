import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbComponent } from './components/product-thumb/product-thumb.component';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';
import { SlideshowModule } from '@annuadvent/ngx-common-ui/slideshow';
import { HelpersEcommerceModule } from '@annuadvent/ngx-core/helpers-ecommerce';

@NgModule({
  declarations: [ProductThumbComponent],
  imports: [
    CommonModule,
    PictureModule,
    SmartButtonModule,
    SlideshowModule,
    HelpersEcommerceModule
  ],
  exports: [ProductThumbComponent]
})
export class ProductThumbModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbComponent } from './components/product-thumb/product-thumb.component';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';
import { SlideshowModule } from '@annuadvent/ngx-common-ui/slideshow';

@NgModule({
  declarations: [ProductThumbComponent],
  imports: [CommonModule, PictureModule, SmartButtonModule, SlideshowModule],
  exports: [ProductThumbComponent]
})
export class ProductThumbModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { SlideshowModule } from '@annuadvent/ngx-common-ui/slideshow';
import { BannersModule } from '@annuadvent/ngx-common-ui/banners';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';
import { FormsModule } from '@angular/forms';
import { HelpersEcommerceModule } from '@annuadvent/ngx-core/helpers-ecommerce';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxImageZoomModule, // module for image zoom
    SpinnerModule,
    PictureModule,
    SlideshowModule,
    BannersModule,
    SmartButtonModule,
    HelpersEcommerceModule
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule {}

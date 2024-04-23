import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailModule } from '@annuadvent/ngx-ecommerce/product-detail';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { HelpersEcommerceModule } from '@annuadvent/ngx-core/helpers-ecommerce';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';
import { AddressModule } from '@annuadvent/ngx-ecommerce/address';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductDetailModule,
    CardModule,
    PictureModule,
    HelpersEcommerceModule,
    SmartButtonModule,
    AddressModule
  ],
  exports: [CartComponent]
})
export class CartModule {}

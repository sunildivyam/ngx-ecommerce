import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImagesComponent } from './components/app-images/app-images.component';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { HelpersEcommerceModule } from '@annuadvent/ngx-core/helpers-ecommerce';

@NgModule({
  declarations: [AppImagesComponent],
  imports: [
    CommonModule,
    PictureModule,
    ReactiveFormModule,
    SmartButtonModule,
    ErrorModule,
    HelpersEcommerceModule
  ],
  exports: [AppImagesComponent]
})
export class AppImagesModule {}

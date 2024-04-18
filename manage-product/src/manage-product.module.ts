import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ProductBasicsComponent } from './components/product-basics/product-basics.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductSizesComponent } from './components/product-sizes/product-sizes.component';
import { ProductPricesComponent } from './components/product-prices/product-prices.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductQuantitiesComponent } from './components/product-quantities/product-quantities.component';
import { ProductOffersComponent } from './components/product-offers/product-offers.component';
import { ProductPublishComponent } from './components/product-publish/product-publish.component';
import { ProductDeliveryComponent } from './components/product-delivery/product-delivery.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';

@NgModule({
  declarations: [
    ManageProductComponent,
    ProductBasicsComponent,
    ProductCategoriesComponent,
    ProductSizesComponent,
    ProductPricesComponent,
    ProductImagesComponent,
    ProductQuantitiesComponent,
    ProductOffersComponent,
    ProductPublishComponent,
    ProductDeliveryComponent
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormModule],
  exports: [ManageProductComponent]
})
export class ManageProductModule {}

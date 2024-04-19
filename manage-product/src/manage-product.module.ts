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
import { ProductDispatchComponent } from './components/product-dispatch/product-dispatch.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';
import { TabsModule } from '@annuadvent/ngx-common-ui/tabs';
import { ManageProductService } from './services/manage-product.service';
import { FormsModule } from '@angular/forms';
import { LevelCategoriesOfPipe } from './pipes/level-categories-of.pipe';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { HelpersEcommerceModule } from '@annuadvent/ngx-core/helpers-ecommerce';
import { ProductThumbModule } from '@annuadvent/ngx-ecommerce/product-thumb';

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
    ProductDispatchComponent,
    LevelCategoriesOfPipe
  ],
  providers: [ManageProductService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormModule,
    TabsModule,
    SmartButtonModule,
    ErrorModule,
    SpinnerModule,
    PictureModule,
    HelpersEcommerceModule,
    ProductThumbModule
  ],
  exports: [ManageProductComponent]
})
export class ManageProductModule {}

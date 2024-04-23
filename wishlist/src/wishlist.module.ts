import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductThumbListModule } from '@annuadvent/ngx-ecommerce/product-thumb-list';

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, ProductThumbListModule],
  exports: [WishlistComponent]
})
export class WishlistModule {}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { CartService } from '@annuadvent/ngx-ecommerce/cart';
import { WishlistService } from '@annuadvent/ngx-ecommerce/wishlist';
import { NgxImageZoomComponent } from 'ngx-image-zoom';

@Component({
  selector: 'anu-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @ViewChild('zoomimage') zoomimage: NgxImageZoomComponent = null;
  @Input()
  product: Product = null;
  @Input() loading: boolean = false;

  activeSize: string = '';
  activeQty: number = 1;
  allowedQty: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  activeImage: string = '';
  zoomLoading: boolean = false;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  private setAllowedQty() {
    let maxQty = this.product?.qty[this.activeSize] || 1;
    this.allowedQty = [];

    maxQty = maxQty > 10 ? 10 : maxQty;

    for (let i = 1; i <= maxQty; i++) {
      this.allowedQty.push(i);
    }
  }

  public setActiveSize(size: string = ''): void {
    this.activeSize =
      size || (this.product?.sizes && this.product?.sizes[0]) || '';

    // Sets allowed Qty list
    this.setAllowedQty();
  }

  ngOnInit(): void {
    this.setActiveSize();
    this.setActiveImage();
    //
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['product'] && this.setActiveSize();
    changes['product'] && this.setActiveImage();
  }

  public onQtyChange(value: number): void {
    console.log(value);
  }

  public onAddToBag(): void {
    this.cartService.add(this.product?.id, this.activeSize, this.activeQty);
  }

  public onWishlist(): void {
    this.wishlistService.add(this.product?.id);
  }

  public setActiveImage(pic: string = ''): void {
    this.zoomLoading = true;
    this.activeImage =
      pic || (this.product?.images?.length && this.product?.images[0]) || '';
  }

  public onZoomImagesLoad(success: boolean): void {
    this.zoomLoading = !success;
  }
}

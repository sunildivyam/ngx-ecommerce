import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
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
  activeImage: string = '';
  zoomLoading: boolean = false;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setActiveImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['product'] && this.setActiveImage();
  }

  public onQtyChange(value: number): void {
    this.activeQty = value;
  }

  public onSizeChange(value: string): void {
    this.activeSize = value;
  }

  public onAddToBag(): void {
    this.cartService.add(this.product, this.activeSize, this.activeQty);
    this.router.navigateByUrl('/my/bag');
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

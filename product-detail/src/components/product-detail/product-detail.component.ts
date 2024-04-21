import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product = null;
  @Input() loading: boolean = false;

  activeSize: string = '';
  activeQty: number = 1;
  allowedQty: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  activeImage: string = '';

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
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['product'] && this.setActiveSize();
    changes['product'] && this.setActiveImage();
  }

  public onQtyChange(value: number): void {
    console.log(value);
  }

  public onAddToBag(): void {}

  public onWishlist(): void {}

  public setActiveImage(pic: string = ''): void {
    this.activeImage =
      pic || (this.product?.images?.length && this.product?.images[0]) || '';
  }
}

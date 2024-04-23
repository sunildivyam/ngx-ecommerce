import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-choose-product-detail',
  templateUrl: './choose-product-detail.component.html',
  styleUrls: ['./choose-product-detail.component.scss']
})
export class ChooseProductDetailComponent {
  @Input() product: Product = null;
  @Input() activeSize: string = '';
  @Input() href: string = '';
  @Input() activeQty: number = 1;
  @Input() enableAddToBag: boolean = true;
  @Input() enableRemove: boolean = false;
  @Input() enableWishlist: boolean = true;

  @Output() addToBagClicked = new EventEmitter<void>();
  @Output() wishlistClicked = new EventEmitter<void>();
  @Output() removeClicked = new EventEmitter<void>();
  @Output() qtyChanged = new EventEmitter<number>();
  @Output() sizeChanged = new EventEmitter<string>();

  allowedQty: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  private setAllowedQty() {
    let maxQty = this.product?.qty[this.activeSize] || 1;
    this.allowedQty = [];

    maxQty = maxQty > 10 ? 10 : maxQty;

    for (let i = 1; i <= maxQty; i++) {
      this.allowedQty.push(i);
    }

    if (this.activeQty > this.allowedQty.length) {
      this.activeQty = this.allowedQty.length;
      this.qtyChanged.emit(this.activeQty);
    }
  }

  public setActiveSize(size: string = ''): void {
    this.activeSize =
      size ||
      this.activeSize ||
      (this.product?.sizes && this.product?.sizes[0]) ||
      '';

    // Sets allowed Qty list
    this.setAllowedQty();

    this.sizeChanged.emit(this.activeSize);
  }

  ngOnInit(): void {
    this.setActiveSize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['product'] && this.setActiveSize();
    const sizeChange = changes['activeSize'];
    sizeChange && this.setActiveSize(sizeChange.currentValue);
  }

  public onQtyChange(value: number): void {
    this.qtyChanged.emit(value);
  }

  public onAddToBag(): void {
    this.addToBagClicked.emit();
  }

  public onWishlist(): void {
    this.wishlistClicked.emit();
  }

  public onRemove(): void {
    this.removeClicked.emit();
  }
}

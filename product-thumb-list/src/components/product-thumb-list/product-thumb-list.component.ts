import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-product-thumb-list',
  templateUrl: './product-thumb-list.component.html',
  styleUrls: ['./product-thumb-list.component.scss']
})
export class ProductThumbListComponent {
  @Input() items: Array<Product> = [];
  @Input() itemClassNames: Array<string> = [];
  @Input() href: string = '';
  @Input() actionLabel: string = 'Buy Now';
  @Input() enableAdd: boolean = false;

  @Output() addClicked = new EventEmitter<void>();

  public onAddClick(event: any): void {
    this.addClicked.emit();
  }
}

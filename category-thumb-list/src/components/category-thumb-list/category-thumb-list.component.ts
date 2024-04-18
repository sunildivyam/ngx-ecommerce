import { Component, Input } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

@Component({
  selector: 'anu-category-thumb-list',
  templateUrl: './category-thumb-list.component.html',
  styleUrls: ['./category-thumb-list.component.scss']
})
export class CategoryThumbListComponent {
  @Input() items: Array<Category> = [];
  @Input() itemClassNames: Array<string> = [];
  @Input() href: string = '';
}

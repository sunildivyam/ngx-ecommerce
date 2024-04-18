import { Component, Inject, Input } from '@angular/core';

import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { DEFAULT_CATEGORY_IMAGE_PROVIDER } from '../../constants/category-thumb.constant';

@Component({
  selector: 'anu-category-thumb',
  templateUrl: './category-thumb.component.html',
  styleUrls: ['./category-thumb.component.scss']
})
export class CategoryThumbComponent {
  @Input() value: Category = null;
  @Input() href: string = '';

  constructor(
    @Inject(DEFAULT_CATEGORY_IMAGE_PROVIDER) public defaultImageUrl: string
  ) {}
}

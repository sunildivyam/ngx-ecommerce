import { Component, Inject, Input } from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { DEFAULT_PRODUCT_IMAGE_PROVIDER } from '../../constants/product-thumb.constant';

/**
 *
 * ProductThumb: A Reusable Component for Product Listings
 *
 * The ProductThumb component provides a visually appealing and interactive way to showcase product thumbnails within your e-commerce application.
 *
 * Key Features:
 *
 * Displays Product Information: Presents essential product details like image, title, price, and potentially other relevant information.
 * Clickable Design: Allows users to seamlessly navigate to the product's detail view for further exploration with a single click.
 * Customizable Appearance: Tailor the look and feel of the thumbnail to match your brand identity through CSS classes or component properties.
 * Benefits:
 *
 * Enhances User Experience: Provides a clear and concise overview of products, allowing users to efficiently browse through the catalog.
 * Promotes Product Discovery: Eye-catching thumbnails can entice users to explore specific products in more detail.
 * Reduces Development Time: This pre-built component eliminates the need to manually create product thumbnails from scratch.
 * Ideal for:
 *
 * Displaying product listings within product catalogs, search results, and similar sections of your e-commerce application.
 */
@Component({
  selector: 'anu-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.scss']
})
export class ProductThumbComponent {
  @Input() value: Product = null;
  @Input() href: string = '';
  @Input() actionLabel: string = 'Buy Now';

  constructor(
    @Inject(DEFAULT_PRODUCT_IMAGE_PROVIDER) public defaultImageUrl: string
  ) {}
}

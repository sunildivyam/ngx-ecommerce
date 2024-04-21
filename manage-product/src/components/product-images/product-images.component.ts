import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { imagesParams } from '../../constants/images-params.constant';
import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';
import { AppError } from '@annuadvent/ngx-core/app-error';

@Component({
  selector: 'anu-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent {
  images: Array<string> = [];
  imagesParams = { ...imagesParams };
  error: AppError = null;
  maxCount = 0;

  constructor(
    public mpS: ManageProductService,
    private gcService: GlobalConfigService
  ) {
    this.gcService.config.subscribe(() => {
      this.maxCount = this.gcService.getValue(
        GlobalConfigParamsEnum.maxProductImageCount
      );

      const { width, height } = this.gcService.getValue(
        GlobalConfigParamsEnum.productImageDimensions
      );

      this.imagesParams = {
        ...imagesParams,
        productImages: {
          ...imagesParams.productImages,
          helpText: `(${width}px X ${height}px) and jpeg format is prefered.`
        }
      };
    });

    this.mpS.product.subscribe((p) => {
      this.images = [...(p?.images || [])];
    });
  }

  private hasDuplicates(imageUploads: Array<ImageUpload>): Array<string> {
    const toUploadImages = imageUploads.map((imgU) => imgU.fileName);
    let duplicates = [];
    this.images.forEach((img) => {
      if (toUploadImages.includes(img)) {
        duplicates.push(img);
      }
    });

    return duplicates;
  }

  public onSave(value: any): void {
    this.error = null;
    const imageUploads: Array<ImageUpload> = value.productImages;
    const duplicates = this.hasDuplicates(imageUploads);
    const totalImagesCount = this.images.length + imageUploads.length;

    if (duplicates.length) {
      this.error = new AppError(
        `Duplicate images - ${duplicates.join('</br>')}`
      );
    } else if (totalImagesCount > this.maxCount) {
      this.error = new AppError(
        `Exceeds max limit of product images. Allowed ${this.maxCount} images, while You would end up iploading ${totalImagesCount} images`
      );
    } else {
      this.mpS.saveImages(imageUploads);
    }
  }

  public onDelete(event: any, img: string) {
    event.stopPropagation();
    this.mpS.deleteProductImage(img);
  }
}

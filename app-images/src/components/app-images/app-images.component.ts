import { Component } from '@angular/core';
import { AppImagesService } from '../../services/app-images.service';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { imagesParams } from '../../constants/images-params.constant';
import { AppError } from '@annuadvent/ngx-core/app-error';
import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';

@Component({
  selector: 'anu-app-images',
  templateUrl: './app-images.component.html',
  styleUrls: ['./app-images.component.scss']
})
export class AppImagesComponent {
  images: Array<string> = [];
  imagesParams = { ...imagesParams };
  error: AppError = null;
  formImages: {
    bannerImages: [];
    otherImages: [];
  };
  constructor(
    public aiS: AppImagesService,
    private gcService: GlobalConfigService
  ) {
    this.aiS.getImages();

    this.gcService.config.subscribe(() => {
      const { width, height } = this.gcService.getValue(
        GlobalConfigParamsEnum.bannerImageDimensions
      );

      this.imagesParams = {
        ...imagesParams,
        bannerImages: {
          ...imagesParams.bannerImages,
          helpText: `(${width}px X ${height}px) and jpeg format is prefered.`
        }
      };
    });

    this.aiS.images.subscribe((p) => {
      this.images = p;
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
    const imageUploads: Array<ImageUpload> = [
      ...(value.bannerImages || []),
      ...(value.otherImages || [])
    ];
    const duplicates = this.hasDuplicates(imageUploads);

    if (duplicates.length) {
      this.error = new AppError(
        `Duplicate images - ${duplicates.join('</br>')}`
      );
    } else {
      this.aiS.uploadImages(imageUploads).then((msg) => {
        if (!msg) {
          value.bannerImages = null;
          value.otherImages = null;
        } else {
          this.error = new AppError({ message: msg });
        }
      });
    }
  }

  public onDelete(event: any, img: string) {
    this.aiS.deleteImage(img);
  }
}

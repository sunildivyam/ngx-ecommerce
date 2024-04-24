import { Injectable } from '@angular/core';
import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { FireStorageImageService } from '@annuadvent/ngx-tools/fire-storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppImagesService {
  private $images = new BehaviorSubject<Array<string>>([]);
  private $loading = new BehaviorSubject<boolean>(false);

  public get images(): Observable<Array<string>> {
    return this.$images.asObservable();
  }

  public get loading(): Observable<boolean> {
    return this.$loading.asObservable();
  }

  constructor(
    private gcSrvice: GlobalConfigService,
    private fireImageService: FireStorageImageService
  ) {}

  public async getImages(): Promise<Array<string>> {
    this.$loading.next(true);
    try {
      const fullPath = this.gcSrvice.getValue(
        GlobalConfigParamsEnum.appImagePath
      );
      const imageList = await this.fireImageService.getImagesListByPath(
        fullPath
      );
      const images = imageList.imageFiles.map((f) => f.name);
      this.$images.next(images);
      this.$loading.next(false);
      return images;
    } catch (error) {
      this.$loading.next(false);
      this.$images.next([]);
      throw error;
    }
  }

  public async uploadImages(imageUploads: Array<ImageUpload>): Promise<string> {
    this.$loading.next(true);
    let rStr = '';
    const successImgs = [];
    try {
      const rootPath = this.gcSrvice.getValue(
        GlobalConfigParamsEnum.appImagePath
      );
      const imgPromises = imageUploads.map((imgU) => {
        const fullPath = `${rootPath}/${imgU.fileName}`;
        return this.fireImageService.uploadImageByPath(
          fullPath,
          imgU.data,
          false
        );
      });

      const result = await Promise.allSettled(imgPromises);

      result.map((res, index) => {
        if (res.status === 'rejected') {
          rStr += `Failed Upload [${imageUploads[index].fileName}] - ${res.reason}`;
        } else {
          successImgs.push(imageUploads[index].fileName);
        }
      });

      this.$images.next([...successImgs, ...this.$images.value]);
      this.$loading.next(false);
      return rStr;
    } catch (error) {
      this.$loading.next(false);
      throw error;
    }
  }

  public async deleteImage(img: string): Promise<void> {
    this.$loading.next(true);
    try {
      const fullPath = `${this.gcSrvice.getValue(
        GlobalConfigParamsEnum.appImagePath
      )}/${img}`;

      const result = await this.fireImageService.deleteImageByPath(fullPath);
      const images = this.$images.value.filter((im) => im !== img);
      this.$images.next(images);
      this.$loading.next(false);
      return;
    } catch (err) {
      this.$loading.next(false);
      throw err;
    }
  }
}

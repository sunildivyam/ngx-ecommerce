import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryThumbComponent } from './components/category-thumb/category-thumb.component';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { SmartButtonModule } from '@annuadvent/ngx-common-ui/smart-button';

@NgModule({
  declarations: [CategoryThumbComponent],
  imports: [CommonModule, CardModule, PictureModule, SmartButtonModule],
  exports: [CategoryThumbComponent]
})
export class CategoryThumbModule {}

import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

@Pipe({
  name: 'levelCategoriesOf'
})
export class LevelCategoriesOfPipe implements PipeTransform {
  transform(
    cats: Array<Category>,
    catId: string,
    level: number,
    ...args: unknown[]
  ): Array<Category> {
    if (!cats?.length || !level) return [];

    if (!catId) {
      return cats.filter((cat) => cat.level === level);
    } else {
      return cats.filter(
        (cat) => cat.level === level && cat.parents?.includes(catId)
      );
    }
  }
}

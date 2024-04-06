import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private $url: string = ''; // Will fetch categories
  private $categories = new BehaviorSubject<Array<Category>>([]);

  constructor(private http: HttpClient) {}

  public get url(): string {
    return this.$url;
  }

  public set url(v: string) {
    this.$url = v;
  }

  public get categories(): Observable<Array<Category>> {
    return this.$categories.asObservable();
  }
  /**
   * Fetches global categories from server
   * Ideally should be called from APP_INITIALIZER
   * @param force
   * @returns
   */
  public async fetch(force: boolean = false): Promise<Array<Category>> {
    if (!this.url) {
      throw new Error(
        'Url is empty. Please provide api url that can fetch global categories.'
      );
    }

    // Serve from cache if available
    if (this.$categories.value && !force) {
      return this.$categories.value;
    }

    // Fetch from sever database (firebase remote categories)

    try {
      const categories: any = await lastValueFrom(this.http.get(this.url));
      // Emit next categories
      this.$categories.next(categories);
      return categories;
    } catch (error) {
      // reset categories
      this.$categories.next(null);
      // throw error
      throw error;
    }
  }
}

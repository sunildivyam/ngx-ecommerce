import { TestBed } from '@angular/core/testing';

import { AppImagesService } from './app-images.service';

describe('AppImagesService', () => {
  let service: AppImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

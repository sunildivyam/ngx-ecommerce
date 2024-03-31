import { TestBed } from '@angular/core/testing';

import { PincodeValidatorService } from './pincode-validator.service';

describe('PincodeValidatorService', () => {
  let service: PincodeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PincodeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

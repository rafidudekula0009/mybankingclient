import { TestBed } from '@angular/core/testing';

import { CustomerUtilService } from './customer-util.service';

describe('CustomerUtilService', () => {
  let service: CustomerUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RegisterCustomerService } from './register-customer.service';

describe('HelloWorldService', () => {
  let service: RegisterCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

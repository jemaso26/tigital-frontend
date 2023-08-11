import { TestBed } from '@angular/core/testing';

import { RestAuthService } from './RestAuthService';

describe('RestAuthServiceTsService', () => {
  let service: RestAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

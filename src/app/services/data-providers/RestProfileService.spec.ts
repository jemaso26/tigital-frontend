import { TestBed } from '@angular/core/testing';
import { RestProfileService } from './RestProfileService';


describe('RestProfileServiceService', () => {
  let service: RestProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

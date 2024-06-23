import { TestBed } from '@angular/core/testing';

import { NutServiceService } from './nut-service.service';

describe('NutServiceService', () => {
  let service: NutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApicenterService } from './apicenter.service';

describe('ApicenterService', () => {
  let service: ApicenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

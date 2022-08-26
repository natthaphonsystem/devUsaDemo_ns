import { TestBed } from '@angular/core/testing';

import { ConnectapiService } from './connectapi.service';

describe('ConnectapiService', () => {
  let service: ConnectapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GlobalsvService } from './globalsv.service';

describe('GlobalsvService', () => {
  let service: GlobalsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

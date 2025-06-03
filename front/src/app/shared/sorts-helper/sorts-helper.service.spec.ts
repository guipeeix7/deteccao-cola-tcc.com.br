import { TestBed } from '@angular/core/testing';

import { SortsHelperService } from './sorts-helper.service';

describe('SortsHelperService', () => {
  let service: SortsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

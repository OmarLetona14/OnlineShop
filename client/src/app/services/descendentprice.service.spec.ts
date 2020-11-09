import { TestBed } from '@angular/core/testing';

import { DescendentpriceService } from './descendentprice.service';

describe('DescendentpriceService', () => {
  let service: DescendentpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescendentpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

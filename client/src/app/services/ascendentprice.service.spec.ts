import { TestBed } from '@angular/core/testing';

import { AscendentpriceService } from './ascendentprice.service';

describe('AscendentpriceService', () => {
  let service: AscendentpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AscendentpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

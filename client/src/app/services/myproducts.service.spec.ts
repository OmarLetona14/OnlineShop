import { TestBed } from '@angular/core/testing';

import { MyproductsService } from './myproducts.service';

describe('MyproductsService', () => {
  let service: MyproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

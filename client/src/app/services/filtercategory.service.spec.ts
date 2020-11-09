import { TestBed } from '@angular/core/testing';

import { FiltercategoryService } from './filtercategory.service';

describe('FiltercategoryService', () => {
  let service: FiltercategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltercategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

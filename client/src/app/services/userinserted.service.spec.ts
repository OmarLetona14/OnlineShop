import { TestBed } from '@angular/core/testing';

import { UserinsertedService } from './userinserted.service';

describe('UserinsertedService', () => {
  let service: UserinsertedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinsertedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

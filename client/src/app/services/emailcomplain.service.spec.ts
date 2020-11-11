import { TestBed } from '@angular/core/testing';

import { EmailcomplainService } from './emailcomplain.service';

describe('EmailcomplainService', () => {
  let service: EmailcomplainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailcomplainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

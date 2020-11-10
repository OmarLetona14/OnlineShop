import { TestBed } from '@angular/core/testing';

import { EmailconfirmationService } from './emailconfirmation.service';

describe('EmailconfirmationService', () => {
  let service: EmailconfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailconfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

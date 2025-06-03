import { TestBed } from '@angular/core/testing';

import { ResendAccountConfirmEmailService } from './resend-account-confirm-email.service';

describe('ResendAccountConfirmEmailService', () => {
  let service: ResendAccountConfirmEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResendAccountConfirmEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

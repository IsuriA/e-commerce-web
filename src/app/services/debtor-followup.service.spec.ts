import { TestBed } from '@angular/core/testing';

import { DebtorFollowupService } from './debtor-followup.service';

describe('DebtorFollowupService', () => {
  let service: DebtorFollowupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtorFollowupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

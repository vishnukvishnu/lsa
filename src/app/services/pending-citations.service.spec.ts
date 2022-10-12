import { TestBed } from '@angular/core/testing';

import { PendingCitationsService } from './pending-citations.service';

describe('PendingCitationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingCitationsService = TestBed.get(PendingCitationsService);
    expect(service).toBeTruthy();
  });
});

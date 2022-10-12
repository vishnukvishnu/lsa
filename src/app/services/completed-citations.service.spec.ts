import { TestBed } from '@angular/core/testing';

import { CompletedCitationsService } from './completed-citations.service';

describe('CompletedCitationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedCitationsService = TestBed.get(CompletedCitationsService);
    expect(service).toBeTruthy();
  });
});

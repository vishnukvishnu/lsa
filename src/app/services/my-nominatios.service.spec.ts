import { TestBed } from '@angular/core/testing';

import { MyNominatiosService } from './my-nominatios.service';

describe('MyNominatiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNominatiosService = TestBed.get(MyNominatiosService);
    expect(service).toBeTruthy();
  });
});

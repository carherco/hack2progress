import { TestBed } from '@angular/core/testing';

import { DistanciasService } from './distancias.service';

describe('DistanciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanciasService = TestBed.get(DistanciasService);
    expect(service).toBeTruthy();
  });
});

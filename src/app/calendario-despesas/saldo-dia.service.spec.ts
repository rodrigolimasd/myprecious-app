import { TestBed } from '@angular/core/testing';

import { SaldoDiaService } from './saldo-dia.service';

describe('SaldoDiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaldoDiaService = TestBed.get(SaldoDiaService);
    expect(service).toBeTruthy();
  });
});

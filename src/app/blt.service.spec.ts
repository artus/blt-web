import { TestBed, inject } from '@angular/core/testing';

import { BltService } from './blt.service';

describe('BltService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BltService]
    });
  });

  it('should be created', inject([BltService], (service: BltService) => {
    expect(service).toBeTruthy();
  }));
});

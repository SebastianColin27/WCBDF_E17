import { TestBed } from '@angular/core/testing';

import { HeroeService } from './heroe-service.service';

describe('HeroeServiceService', () => {
  let service: HeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

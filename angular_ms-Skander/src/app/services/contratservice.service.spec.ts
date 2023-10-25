import { TestBed } from '@angular/core/testing';

import { ContratserviceService } from './contratservice.service';

describe('ContratserviceService', () => {
  let service: ContratserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

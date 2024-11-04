import { TestBed } from '@angular/core/testing';

import { UtilsGeneralsService } from './utils-generals.service';

describe('UtilsGeneralsService', () => {
  let service: UtilsGeneralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsGeneralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

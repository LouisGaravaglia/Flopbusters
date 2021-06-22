import { TestBed } from '@angular/core/testing';

import { RentalListService } from './rental-list/rental-list.service';

describe('RentalListService', () => {
  let service: RentalListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

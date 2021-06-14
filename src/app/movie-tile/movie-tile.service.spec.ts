import { TestBed } from '@angular/core/testing';

import { MovieTileService } from './movie-tile.service';

describe('MovieTileService', () => {
  let service: MovieTileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

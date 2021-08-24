import { TestBed } from '@angular/core/testing';

import { GetFavoriteMoviesService } from './get-favorite-movies.service';

describe('GetFavoriteMoviesService', () => {
  let service: GetFavoriteMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFavoriteMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

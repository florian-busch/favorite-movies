import { TestBed } from '@angular/core/testing';

import { DBConnect } from './db-connect.service';

describe('SaveMovieService', () => {
  let service: DBConnect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBConnect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

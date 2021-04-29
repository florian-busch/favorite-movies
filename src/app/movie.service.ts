import { Injectable } from '@angular/core';
import { MOVIE } from './mock-movie';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor() { }

  getMovie(): Observable<Movie> {
    const movie = of(MOVIE)
    return movie
  }
}
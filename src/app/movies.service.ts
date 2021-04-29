import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { MOVIES } from './mock-api-response';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

  getMovies(): Observable<Movie> {
    const movies = of(MOVIES)
    return movies
}
}

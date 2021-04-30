import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { MOVIES } from './mock-api-response';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  private moviesURL = 'http://127.0.0.1:3000/movies'

  // //getMovies with mock data
  // getMovies(): Observable<Movie> {
  //   const movies = of(MOVIES)
  //   return movies
  // }

  //get movies with http data
  getMovies(query): Observable<Movie> {
    return this.http.post(this.moviesURL, query)
  }
}

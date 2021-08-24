import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  private moviesURL = 'http://127.0.0.1:3000/tmdb/movies'

  //get movies with http data
  getMovies(query): Observable<Movie> {
    return this.http.post(this.moviesURL, query)
  }
}

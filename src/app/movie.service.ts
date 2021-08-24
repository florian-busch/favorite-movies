import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  private moviesByID = 'http://127.0.0.1:3000/tmdb/movieByID'

  //TODO: connect to 'Details' button in search results favorite-list
  getMovieDetail(movieID): Observable<Movie> {
    let query = {id: movieID}
    return this.http.post<Movie>(this.moviesByID, query)
  }

}
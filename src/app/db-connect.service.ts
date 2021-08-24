import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';



@Injectable({
  providedIn: 'root'
})
export class DBConnect {

  constructor(private http: HttpClient) { }

  private saveMovieURL ='http://127.0.0.1:3000/db/saveOne';
  private deleteMovieURL = 'http://127.0.0.1:3000/db/deleteOneMovie';

  saveToFavorites(data): Observable<Movie> {
    let movieData = {
      title: data.title,
      overview: data.overview,
      release_date: data.release_date,
      adult: data.adult,
      poster_path: data.poster_path
    }
    return this.http.post(this.saveMovieURL, movieData)
  }

  deleteFromFavorites(movieID): Observable<Movie> {
    let body = {
      _id: movieID
    }
    return this.http.post(this.deleteMovieURL, body)
  }
}

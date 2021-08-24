import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class GetFavoriteMoviesService {

  constructor(private http: HttpClient) { }

  private getFavoriteMoviesURL = 'http://127.0.0.1:3000/db/favorites';


  getFavorites(): Observable<Movie> {    
    return this.http.get(this.getFavoriteMoviesURL)
  }

}

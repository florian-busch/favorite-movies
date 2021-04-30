import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  moviesList: Movie = {};

  constructor(private moviesService: MoviesService) { }

  //get list of movie titles from MoviesService
  getMovies(query) {
    this.moviesService.getMovies(query)
      .subscribe(movies => this.moviesList = movies)
      
      }

  //gets movie details based on id; TODO express route and search for id https://api.themoviedb.org/3/movie/{ID}?api_key={API-KEY}
 getDetails(id) {
  console.log(id)
  }

  ngOnInit(): void {
    // this.getMovies()
    // console.log(this.moviesList)
  }

}

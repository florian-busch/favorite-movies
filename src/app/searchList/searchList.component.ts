import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'searchList',
  templateUrl: './searchList.component.html',
  styleUrls: ['./searchList.component.css']
})
export class SearchListComponent implements OnInit {

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
  }

}

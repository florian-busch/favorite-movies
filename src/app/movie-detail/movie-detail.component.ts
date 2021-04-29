import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  favMovie: Movie = {
  }

  constructor(private movieService: MovieService) { }

  //retrieve movie-details from movieService
  getMovie() {
    this.movieService.getMovie()
      .subscribe(movie => this.favMovie = movie)
  }

  //add function
  addToFavorites(): void {
  }

  //delete function
  deleteFromFavorites(): void {

  }

  ngOnInit(): void {
    this.getMovie()
  }
}

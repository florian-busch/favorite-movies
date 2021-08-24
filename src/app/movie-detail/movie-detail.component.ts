import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DBConnect } from '../db-connect.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() id: string;

  favMovie: Movie = {
  }

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private location: Location,
              private dbconnect: DBConnect,
              private messageService: MessageService) { }

  //get movie-details from movieService
  getMovie() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetail(id)
      .subscribe(movie => this.favMovie = movie)
  }

  goBack(): void {
    this.location.back()
  }

  //TODO: subscribe anpassen und message-function mit 'Movie saved' schreiben 
  saveMovie(): void {
    this.dbconnect.saveToFavorites({
      title: this.favMovie.title,
      overview: this.favMovie.overview,
      release_date: this.favMovie.release_date,
      adult: this.favMovie.adult,
      poster_path: this.favMovie.poster_path
  }).subscribe(res => this.messageService.addMessage(res.message))
  }


  //delete function
  deleteFromFavorites(): void {

  }

  ngOnInit(): void {
    this.getMovie()
  }
}

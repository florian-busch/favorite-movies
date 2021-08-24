import { Component, OnInit } from '@angular/core';
import { GetFavoriteMoviesService } from '../get-favorite-movies.service';
import { Movie } from '../movie';
import { DBConnect } from '../db-connect.service';
import { MessageService } from '../message.service';




@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  constructor(private getFavoriteMovies: GetFavoriteMoviesService,
              private dbConnect: DBConnect,
              private messageService: MessageService) { }

  favoriteMovies: Movie = []
  sortCategories = ['Name', 'Oldest', 'Newest', 'Added recently']

  fetchFavorites(): void {
    this.getFavoriteMovies.getFavorites()
      .subscribe(data => this.favoriteMovies = data);
  }

  ngOnInit(): void {
    this.fetchFavorites()
  }

  //sort favoriteMovies by Name, Release date or Date of adding to db or
  sortMovies(data): void {
    if (data.sortBy == 'Name') {
      this.favoriteMovies = this.favoriteMovies.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
        });
      }
    if (data.sortBy == 'Oldest') {
      this.favoriteMovies = this.favoriteMovies.sort((a, b) => {
        if (a.release_date < b.release_date) return -1;
        if (a.release_date > b.release_date) return 1;
        return 0;
        });
      }
      if (data.sortBy == 'Newest') {
        this.favoriteMovies = this.favoriteMovies.sort((a, b) => {
          if (a.release_date > b.release_date) return -1;
          if (a.release_date < b.release_date) return 1;
          return 0;
          });
        }
        if (data.sortBy == 'Added recently') {
          this.favoriteMovies = this.favoriteMovies.sort((a, b) => {
            if (a.added > b.added) return -1;
            if (a.added < b.added) return 1;
            return 0;
            });
          }
    };          

  //TODO: add service that deletes that movie from db
  deleteMovie(movieID): void {
    this.dbConnect.deleteFromFavorites(movieID)
      .subscribe(data => this.messageService.addMessage(data.message))
    this.fetchFavorites()
    setTimeout(this.messageService.clearMessages, 3000)

  }

}

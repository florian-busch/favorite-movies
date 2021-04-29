import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { Movie } from './movie';
import { FavoriteListComponent } from './favorite-list/favorite-list.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

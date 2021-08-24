import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchListComponent } from './searchList/searchList.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';


const routes: Routes = [
  { path: 'search', component: SearchListComponent}, 
  { path: '', redirectTo:'/search', pathMatch: 'full'},
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'favorites', component: FavoriteListComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ListMoviesComponent } from "./movie/list-movies/list-movies.component";
import { AddMovieComponent } from "./movie/add-movie/add-movie.component";

export const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent
  },
  {
    path: 'add-movie',
    component: AddMovieComponent
  },
];

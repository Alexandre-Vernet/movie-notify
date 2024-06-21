import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ListMoviesComponent,
    AddMovieComponent,
  ]
})
export class MovieModule { }

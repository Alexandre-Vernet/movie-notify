import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataViewModule } from "primeng/dataview";
import { TagModule } from "primeng/tag";
import { AsyncPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { MovieDto } from '@movie-notify';
import { Button } from "primeng/button";
import { MovieService } from "../movie.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    NgClass,
    NgForOf,
    Button,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  movies: MovieDto[];
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly movieService: MovieService,
  ) {
  }

  ngOnInit() {
    this.movieService.getMovies()
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(movies => this.movies = movies);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Movie, Status } from "./movie";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getMovies(): Observable<Movie[]> {
    return of([
      {
        id: 1,
        name: 'Movie 1',
        status: Status.IN_PROGRESS,
        image: 'https://fr.web.img4.acsta.net/pictures/15/01/20/11/47/440039.jpg',
        creationDate: new Date()
      },
      {
        id: 1,
        name: 'Movie 1',
        status: Status.IN_PROGRESS,
        image: 'https://fr.web.img4.acsta.net/pictures/15/01/20/11/47/440039.jpg',
        creationDate: new Date()
      },
      {
        id: 1,
        name: 'Movie 1',
        status: Status.IN_PROGRESS,
        image: 'https://fr.web.img4.acsta.net/pictures/15/01/20/11/47/440039.jpg',
        creationDate: new Date()
      },
      {
        id: 1,
        name: 'Movie 1',
        status: Status.IN_PROGRESS,
        image: 'https://fr.web.img4.acsta.net/pictures/15/01/20/11/47/440039.jpg',
        creationDate: new Date()
      },
    ]);
  }

  addMovie(movie: Omit<Movie, 'id'|'image'>): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:3000/movies', movie);
  }
}

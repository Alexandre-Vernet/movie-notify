import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDto } from '@movie-notify';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUri = environment.movieUri();

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getMovies(): Observable<MovieDto[]> {
    return this.http.get<MovieDto[]>(`${this.movieUri}`);
  }

  addMovie(movie: Omit<MovieDto, 'id' | 'image'>): Observable<MovieDto> {
    return this.http.post<MovieDto>(`${this.movieUri}/movies`, movie);
  }
}

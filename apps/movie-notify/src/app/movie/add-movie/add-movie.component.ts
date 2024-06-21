import { Component, OnInit } from '@angular/core';
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { distinctUntilChanged, Subject, switchMap, takeUntil } from "rxjs";
import { MovieService } from "../movie.service";
import { Button } from "primeng/button";
import { Router } from "@angular/router";
import { ToastService } from "../../toast/toast.service";
import { Movie, Status } from "../movie";

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    Button,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent implements OnInit {

  addMovieForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  buttonAddMovie$ = new Subject<void>();
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router,
    private readonly toastService: ToastService,
  ) {
  }

  ngOnInit() {
    this.buttonAddMovie$.pipe(
      distinctUntilChanged(),
      takeUntil(this.unsubscribe$),
      switchMap(() => {
        const movie: Omit<Movie, 'id'|'image'> = {
          name: this.addMovieForm.get('name').value,
          status: Status.IN_PROGRESS,
          creationDate: new Date(),
        }
        return this.movieService.addMovie(movie);
      }),
    )
      .subscribe({
        next: () => {
          this.addMovieForm.reset();
          this.toastService.showSuccess('Movie added');
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.toastService.showError(error.err.message);
        }
      });
  }
}

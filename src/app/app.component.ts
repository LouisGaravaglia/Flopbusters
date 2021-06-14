import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Imovie } from './interfaces/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flopbusters';
  moviesList: Imovie[] = [
    {
      title: "Batman and Robin",
      year: 1996,
    },
    {
      title: "The Room",
      year: 1992,
    },
    {
      title: "Dudley Do Right",
      year: 1999,
    },
    {
      title: "Fairbanks",
      year: 1990,
    }
  ];

  constructor(public rentalsListService: AppServiceService) {
    rentalsListService.getAvailableMovies().subscribe((movies: any) => {
      this.moviesList = movies;
    });
  }

  addMovieToRentals(movie: Imovie) {
    this.rentalsListService.addMovieToRentalsList(movie);
  }

  clearRentals() {
    this.rentalsListService.clearRentalList();
  }
}

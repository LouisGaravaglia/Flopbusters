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
      yearReleased: 1996,
    },
    {
      title: "The Room",
      yearReleased: 1992,
    },
    {
      title: "Dudley Do Right",
      yearReleased: 1999,
    },
    {
      title: "Fairbanks",
      yearReleased: 1990,
    }
  ];

  constructor(public rentalsListService: AppServiceService) {

  }

  addMovieToRentals(movie: Imovie) {
    this.rentalsListService.addMovieToRentalsList(movie);
  }

  clearRentals() {
    this.rentalsListService.clearRentalList();
  }
}

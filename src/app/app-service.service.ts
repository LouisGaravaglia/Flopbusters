import { Injectable } from '@angular/core';
import { Imovie } from './interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  rentalsList: Imovie[] = [];

  constructor() { }

  addMovieToRentalsList(newMovie: Imovie) {
    for (let movie of this.rentalsList) {
      if (movie.title === newMovie.title) return;
    }
    this.rentalsList.push(newMovie)
  }

  clearRentalList() {
    this.rentalsList = [];
  }
}

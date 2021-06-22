import { Injectable } from '@angular/core';
import { Imovie } from '../../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {
  rentalsList: Imovie[] = [];


  constructor() { }

  addMovieToRentalsList(newMovie: Imovie) {
    console.log("adding movie in service", this.rentalsList);
    for (let movie of this.rentalsList) {
      if (movie.title === newMovie.title) return;
    }
    this.rentalsList.push(newMovie)
  }

  clearRentalList() {
    this.rentalsList = [];
    console.log("service clear list", this.rentalsList);
  }
}

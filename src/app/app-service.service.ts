import { Injectable, Output } from '@angular/core';
import { Imovie } from './interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  rentalsList: Imovie[] = [];

  constructor() { }

  addMovieToRentalsList(movie: Imovie) {
    this.rentalsList.push(movie)
  }

  clearRentalList() {
    console.log("in app service for clear");
    console.log(this.rentalsList);
    
    this.rentalsList = [];
  console.log(this.rentalsList);
  
  }
}

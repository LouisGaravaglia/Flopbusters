import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  rentalsList: object[] = [];

  constructor() { }

  addMovieToRentalsList() {
    console.log("adding movie");
    
    // this.rentalsList.push(movie)
  }

  clearRentalList() {
    this.rentalsList = [];
  }
}

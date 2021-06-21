import { Injectable } from '@angular/core';
import { Imovie } from './interfaces/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  rentalsList: Imovie[] = [];
  availableMovies: Imovie[] = [];

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {

  }

  getAvailableMovies() {
    return this.http.get('http://localhost:3000/movies');

  }

  addMovieToRentalsList(newMovie: Imovie) {
    console.log("adding movie in service", newMovie);
    
    for (let movie of this.rentalsList) {
      if (movie.title === newMovie.title) return;
    }
    this.rentalsList.push(newMovie)
  }

  clearRentalList() {
    this.rentalsList = [];
  }
}

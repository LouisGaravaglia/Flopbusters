import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Imovie } from '../interfaces/movies';

@Component({
  selector: 'flop-movie-tile-container',
  templateUrl: './movie-tile-container.component.html',
  styleUrls: ['./movie-tile-container.component.css'],
  providers: [AppServiceService]
})
export class MovieTileContainerComponent implements OnInit {
  title = 'Flopbusters';
  moviesList$: any;
  // moviesList: any = [
  //   {
  //     title: "Batman and Robin",
  //     year: 1996,
  //   },
  //   {
  //     title: "The Room",
  //     year: 1992,
  //   },
  //   {
  //     title: "Dudley Do Right",
  //     year: 1999,
  //   },
  //   {
  //     title: "Fairbanks",
  //     year: 1990,
  //   }
  // ];


  constructor(public rentalsListService: AppServiceService) {}

  ngOnInit() {
    this.moviesList$ = this.rentalsListService.getAvailableMovies()
    // INSTEAD OF SUBSCRIBING I'M USING THE ASYNC PIP AND MOVIESLIST$ OBSERVALBLE VARIABLE
    // .subscribe((movies: any) => {
    //   this.moviesList = movies;
    // });
  }

  addMovieToRentals(movie: Imovie) {
    this.rentalsListService.addMovieToRentalsList(movie);
    console.log("adding movie to rentals!");
    
  }

  clearRentals() {
    this.rentalsListService.clearRentalList();
  }
}

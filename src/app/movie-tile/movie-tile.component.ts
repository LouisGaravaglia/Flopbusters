import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Imovie } from '../interfaces/movies';


@Component({
  selector: 'flop-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  // @Input() title = '';
  // @Input() year = 0;
  @Output() addMovieToRentalsList = new EventEmitter()
  @Input() movie: Imovie = {
    title: "",
    year: 0
  };

  constructor() {

  }

  ngOnInit(): void {
  }

  onAddMovieToRentals(movie: Imovie) {
    this.addMovieToRentalsList.emit(movie)
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Imovie } from '../interfaces/movies';


@Component({
  selector: 'flop-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  // @Input() title = '';
  // @Input() yearRelease = 0;
  @Input() movie: Imovie = {
    title: "",
    yearReleased: 0
  };

  constructor(private appService: AppServiceService) {

  }

  ngOnInit(): void {
  }

  onAddMovieToRentals(movie: Imovie) {
    this.appService.addMovieToRentalsList(movie);
  }

}

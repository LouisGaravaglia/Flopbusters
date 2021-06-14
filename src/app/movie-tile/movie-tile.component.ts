import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Imovie } from '../interfaces/movies';
// import { MovieTileService } from './movie-tile.service'

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
  hoveredMovie: string = "";
  movieTileCardClass: string = "";
  // @HostBinding('style.backgroundColor') backgroundColor: string = "";
  // @HostBinding('style.border') border: string = "";


  // constructor(private movieTileService: MovieTileService) {

  // }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
   if (this.hoveredMovie.includes("Santa")) console.log("KEY EVENT!");
  }

  @HostListener('mouseenter', ['$event'])
  mouseenterListener(event: any): void {
    console.log("mouseenter true", event.srcElement.innerText);
    this.hoveredMovie = event.srcElement.innerText;
    this.movieTileCardClass = "my-background";
    // this.border = '2px solid red';
    // this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave', ['$event'])
  madeUpName(event: any): void {
    console.log("mouseleave true", event.srcElement.innerText);
    this.hoveredMovie = "";
    this.movieTileCardClass = "";
  }

  ngOnInit(): void {
  }

  onAddMovieToRentals(movie: Imovie) {
    this.addMovieToRentalsList.emit(movie)
  }

}

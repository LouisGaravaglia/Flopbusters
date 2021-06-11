import { Component } from '@angular/core';
import { Imovie } from './interfaces/movies';

// let moviesList =  require('./moviesList.js');

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
}

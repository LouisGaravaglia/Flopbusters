import { Injectable } from '@angular/core';
import { Imovie } from './interfaces/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  availableMovies: Imovie[] = [];

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {

  }

  getAvailableMovies() {
    return this.http.get('http://localhost:3000/movies');

  }




}

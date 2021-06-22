import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Imovie } from '../../interfaces/movies';
import { AppServiceService } from '../../app-service.service';
import { RentalListService } from './rental-list.service';

  // [rentalsList]='rentalsListService.rentalsList'
  // (clearRentalsList)='clearRentals()'

@Component({
  selector: 'flop-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
  })
export class RentalListComponent implements OnInit {
  // @Output() clearRentalsList = new EventEmitter();
  rentalsList: Imovie[] = [{
    title: "",
    year: 0
  }];

  constructor(public rentalsListService: RentalListService) {}

  ngOnInit(): void {
    this.rentalsList = this.rentalsListService.rentalsList;
  }

  onClearRentalsClick() {
    this.rentalsList = [];
    this.rentalsListService.clearRentalList();
  }

}

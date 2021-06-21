import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Imovie } from '../../interfaces/movies';
import { AppServiceService } from '../../app-service.service';

  // [rentalsList]='rentalsListService.rentalsList'
  // (clearRentalsList)='clearRentals()'

@Component({
  selector: 'flop-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
  providers: [AppServiceService]
})
export class RentalListComponent implements OnInit {
  @Output() clearRentalsList = new EventEmitter();
  @Input() rentalsList: Imovie[] = [{
    title: "",
    year: 0
  }];

  constructor(public rentalsListService: AppServiceService) {}


  ngOnInit(): void {
    this.rentalsList = this.rentalsListService.rentalsList;
  }

  onClearRentalsClick() {
    this.rentalsListService.clearRentalList;
  }

}

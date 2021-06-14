import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Imovie } from '../../interfaces/movies';

@Component({
  selector: 'flop-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  @Output() clearRentalsList = new EventEmitter();
  @Input() rentalsList: Imovie[] = [{
    title: "",
    year: 0
  }];

  ngOnInit(): void {
  }

  onClearRentalsClick() {
    this.clearRentalsList.emit()
  }

}

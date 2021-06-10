import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flop-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  // @Output() clearRentalList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // onClearRentalsClick() {
  //   this.clearRentalList.emit();
  // }

}

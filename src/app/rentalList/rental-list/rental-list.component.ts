import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
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
    yearReleased: 0
  }];
  // rentalsList: Imovie[] = [{
  //   title: "",
  //   yearReleased: 0
  // }];

  // constructor(private appService: AppServiceService) { 
  //   this.rentalsList = appService.rentalsList;
  // }

  ngOnInit(): void {
  }

  onClearRentalsClick() {
    console.log("clicked clear");
    
    this.clearRentalsList.emit()
  }

}

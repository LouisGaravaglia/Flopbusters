import { Component, OnInit, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'flop-rent-button',
  templateUrl: './rent-button.component.html',
  styleUrls: ['./rent-button.component.css']
})
export class RentButtonComponent {
  // hoveredButton: boolean = false;
  @HostBinding('style.backgroundColor') backgroundColor: string = "";
  @HostBinding('style.border') border: string = "";
  @HostBinding('style') myStyles = {};
  hoveredButton: boolean = false;
  // @HostBinding('class.btn-outline-danger') hoveredButton: boolean = false;
  @Output() rentButtonClicked = new EventEmitter();
  @Input() movie: any = "";

  constructor() { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
  }

  @HostListener('mouseenter', ['$event'])
  mouseenterListener(event: any): void {
    // this.backgroundColor = 'black';
    // this.border = '5px solid red'
    // this.myStyles = {backgroundColor: 'black', border: '2px solid green'}
    this.hoveredButton = true;
  }

  @HostListener('mouseleave', ['$event'])
  madeUpName(event: any): void {
    // this.border = '';
    // this.backgroundColor = '';
    // this.myStyles = {}
    this.hoveredButton = false;
  }

  handleRentButtonClick(movie: any) {
    this.rentButtonClicked.emit(movie)
  }

}

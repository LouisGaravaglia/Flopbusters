import { Component, OnInit, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'flop-rent-button',
  templateUrl: './rent-button.component.html',
  styleUrls: ['./rent-button.component.css']
})
export class RentButtonComponent {
  hoveredButton: boolean = false;
  @HostBinding('style.border') border: string = "";
  @Output() rentButtonClicked = new EventEmitter();
  @Input() movie: any = "";

  constructor() { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
  }

  @HostListener('mouseenter', ['$event'])
  mouseenterListener(event: any): void {
    console.log("mouseenter true", event.srcElement.innerText);
    this.hoveredButton = true;
  }

  @HostListener('mouseleave', ['$event'])
  madeUpName(event: any): void {
    console.log("mouseleave true", event.srcElement.innerText);
    this.hoveredButton = false;
  }

  handleRentButtonClick(movie: any) {
    this.rentButtonClicked.emit(movie)
  }

}

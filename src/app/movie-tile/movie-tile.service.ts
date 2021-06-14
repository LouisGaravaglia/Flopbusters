// import { Injectable } from '@angular/core';
// import { fromEvent } from 'rxjs';
// import { Observable } from 'rxjs/Observable';


// @Injectable({
//   providedIn: 'root'
// })
// export class MovieTileService {
//   el: any;
//   mouseMoves: any;
//   subscription: any;

//   logMousePosition() {
//       this.el = document.getElementById('movie-title')!;

//     Observable.fromEvent(this.el, 'mousemove').subscribe((e:any) => {
//   console.log(e.pageX, e.pageY)
// })
//   }

//   ngOnInit() {

//   this.el = document.getElementById('movie-title')!;



//   // Create an Observable that will publish mouse movements
//   this.mouseMoves = fromEvent<MouseEvent>(this.el, 'mousemove');

//   // Subscribe to start listening for mouse-move events
//   this.subscription = this.mouseMoves.subscribe((evt: any) => {
//     // Log coords of mouse movements
//     console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

//     // When the mouse is over the upper-left of the screen,
//     // unsubscribe to stop listening for mouse movements
//     if (evt.clientX < 40 && evt.clientY < 40) {
//       this.subscription.unsubscribe();
//     }
//   });
//   }



//   constructor() { }
// }

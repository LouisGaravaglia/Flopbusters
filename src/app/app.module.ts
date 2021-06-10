import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalListComponent } from './rentalList/rental-list/rental-list.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    LandingSectionComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalListComponent } from './rentalList/rental-list/rental-list.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { RentButtonComponent } from './rent-button/rent-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    LandingSectionComponent,
    MovieTileComponent,
    RentButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

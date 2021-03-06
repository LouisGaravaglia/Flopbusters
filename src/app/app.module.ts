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
import { MovieTileContainerComponent } from './movie-tile-container/movie-tile-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentalListService } from './rentalList/rental-list/rental-list.service';
import { AppServiceService } from './app-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    LandingSectionComponent,
    MovieTileComponent,
    RentButtonComponent,
    MovieTileContainerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppServiceService, RentalListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTileContainerComponent } from './movie-tile-container/movie-tile-container.component';
import { RentalListComponent } from './rentalList/rental-list/rental-list.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';

const routes: Routes = [
  {path: '', component: LandingSectionComponent},
  {path: 'flops', component: MovieTileContainerComponent },
  {path: 'rentalList', component: RentalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

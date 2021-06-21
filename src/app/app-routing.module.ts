import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTileContainerComponent } from './movie-tile-container/movie-tile-container.component';
import { RentalListComponent } from './rentalList/rental-list/rental-list.component';

const routes: Routes = [
  {path: 'flops', component: MovieTileContainerComponent },
  {path: 'rentalList', component: RentalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

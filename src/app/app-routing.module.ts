import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionComponent} from './region/region.component';
import {DepartementComponent} from './departement/departement.component';

const routes: Routes = [
  {path:"regions",component:RegionComponent},
  {path:"departements",component:DepartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

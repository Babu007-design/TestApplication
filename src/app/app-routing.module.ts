import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'Admin', component: AdminPageComponent },
  { path: 'Home', component: HomePageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

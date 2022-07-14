import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  }, {
    path:"create",
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

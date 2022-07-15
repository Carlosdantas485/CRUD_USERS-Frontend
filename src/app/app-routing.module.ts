import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  }, 
  {
    path:"create",
    component: CreateUserComponent
  },
  {
    path:"edit/:id",
    component: EditUserComponent
  },
  {
    path:"delete/:id",
    component: DeleteUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { DetailComponent } from './detail/detail.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  { path: '', component: LoginformComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

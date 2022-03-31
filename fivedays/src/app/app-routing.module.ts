import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  { path: '', component: LoginformComponent },
  { path: 'dashboard', component: DashbaordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

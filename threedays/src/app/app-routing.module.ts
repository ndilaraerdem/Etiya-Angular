import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UservalidComponent } from './uservalid/uservalid.component';

const routes: Routes = [
  { path:'uservalid', component: UservalidComponent },
  { path:'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

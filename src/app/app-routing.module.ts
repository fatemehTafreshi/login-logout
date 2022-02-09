import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GaurdService} from "./components/shared/gaurd.service";
import {HomeComponent} from "./components/shared/home/home.component";
import {LoginComponent} from "./components/shared/login/login.component";
import {ProductComponent} from "./components/shared/product/product.component";


const routes:Routes=[
  {
    path:'home',
    canActivate:[GaurdService],
    component:HomeComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'product',
    canActivate:[GaurdService],
    component:ProductComponent
  },
  {
    path:'**',
    component:LoginComponent
  }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}

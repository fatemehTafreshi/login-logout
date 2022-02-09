import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './layout/menu/menu.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    MenuComponent,
    LogoutComponent,
    MenuComponent,
    LoginComponent,

  ]
})
export class SharedModule { }

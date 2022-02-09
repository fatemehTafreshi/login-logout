import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SharedModule} from "./components/shared/shared.module";
import {GaurdService} from "./components/shared/gaurd.service";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {LogoutComponent} from "./components/shared/logout/logout.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    GaurdService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

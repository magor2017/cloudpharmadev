import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app.routing'

import { AppComponent } from './app.component';
import { CaissierComponent } from './caissier/caissier.component';
import { VenteComponent } from './caissier/vente/vente.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CaissierComponent,
    VenteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

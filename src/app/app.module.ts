import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app.routing'

import { AppComponent } from './app.component';
import { CaissierComponent } from './caissier/caissier.component';
import { VenteComponent } from './caissier/vente/vente.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';


@NgModule({
  declarations: [
    AppComponent,
    CaissierComponent,
    VenteComponent,
    LoginComponent,
    HeaderComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

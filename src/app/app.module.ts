import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*********************************************************************************
 *             Components
 ***********************************************************************************/
import { Routing } from './app.routing'

import { AppComponent } from './app.component';
import { CaissierComponent } from './caissier/caissier.component';
import { VenteComponent } from './vente/vente.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';

/*********************************************************************************
 *             Modules
 ***********************************************************************************/
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*********************************************************************************
 *           services
 ***********************************************************************************/

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
    NgbModule.forRoot(),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

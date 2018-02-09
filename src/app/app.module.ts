import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*********************************************************************************
 *             Modules
 ***********************************************************************************/
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NgPipesModule} from 'ngx-pipes';
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { HistoireComponent } from './histoire/histoire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { IpmComponent } from './vente/ipm/ipm.component';
import { AnnulationComponent } from './vente/annulation/annulation.component';

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
    MenusComponent,
    HistoireComponent,
    DashboardComponent,
    ProfilComponent,
    IpmComponent,
    AnnulationComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    Routing,
    NgPipesModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

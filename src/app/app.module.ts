import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule,NgForm } from '@angular/forms';

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
import { AssistantComponent} from './assistant/assistant.component';
import { ParametrecompteComponent } from './parametrecompte/parametrecompte.component';
import { ClientComponent } from './client/client.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { IpmassComponent } from './ipm/ipm.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule } from '@angular/forms';

/*********************************************************************************
 *           services
 ***********************************************************************************/
 import { ClientService } from './services/client.service.ts';

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
    AnnulationComponent,
    AssistantComponent,
    ParametrecompteComponent,
    ClientComponent,
    ParticulierComponent,
    IpmassComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    Routing,
    NgPipesModule,
    ModalModule.forRoot(),
    FormsModule,
  ],
  providers: [
     ClientService,
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }

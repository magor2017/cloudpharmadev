import { NgModule }  from '@angular/core' ;
import  { RouterModule, Routes} from '@angular/router' ;


import { CaissierComponent } from './caissier/caissier.component';
import { VenteComponent } from './vente/vente.component';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { HistoireComponent } from './histoire/histoire.component';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IpmComponent } from './vente/ipm/ipm.component';
import { AnnulationComponent } from './vente/annulation/annulation.component';
import { DirecteComponent } from './vente/directe/directe.component';
//declaration des routes de navigatoin

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'caissier', component: CaissierComponent},
    { path:'vente',
                    component: VenteComponent,
                    children :[
                        { path:'directe', component: DirecteComponent},
                        { path:'ipm', component: IpmComponent},
                        { path:'ipm', component: AnnulationComponent}
                    ] 
    },
    { path:'login',component:LoginComponent },
    { path:'histoire',component:HistoireComponent },
    { path:'profil',component:ProfilComponent },
    { path:'dashboard',component:DashboardComponent },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

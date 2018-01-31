import { NgModule }  from '@angular/core' ;
import  { RouterModule, Routes} from '@angular/router' ;


import { CaissierComponent } from './caissier/caissier.component';
import { VenteComponent } from './vente/vente.component';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';




const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'caissier', component: CaissierComponent,
        children :[
             { path:'vente', component: VenteComponent}
        ] },
    { path:'login',component:LoginComponent },
    
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

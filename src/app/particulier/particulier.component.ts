import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Http,Headers} from '@angular/http';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.css']
})
export class ParticulierComponent {
  title = 'Super cloudpharma accueil';
  private headers=new Headers();
  modal:BsModalRef;
  prenom:string;
  nom:string;
  tel:string;
  adresse:string;
  actul:string;
  limite:string;
  nb:string="0";
  liste:any=[{prenom:'omar',nom:'sy',montant:5000},{prenom:'naby',nom:'ndiaye',montant:40000}];
  constructor(private router:Router,private modalService: BsModalService,private http:Http,private clientService:ClientService){
     this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
     
  }
  showmodalcaissier(template:any,nb:string){
     this.nb=nb;
     this.modal = this.modalService.show(template);
  }
  sub(n:any){
 //   let p=document.getElementById('prenom').value;
 //   console.log(p);
  }
  enregistrer_client(){
    let data={prenom:this.prenom,nom:this.nom,adresse:this.adresse,tel:this.tel,limite:this.limite};
    this.liste.push(data);
    let params="mag";
    console.log(data);
    this.clientService.newClient(data,"particulier").then(response => {
        console.log(response);
     });
    this.modal.hide();
    
  }
  
  bloquerClient(){
     this.clientService.bloquerClient("code").then(response => {
        console.log(response);
     }); 
  }
  
  modifierClient(){
     let data={prenom:this.prenom,nom:this.nom,adresse:this.adresse,tel:this.tel,limite:this.limite};
     this.clientService.modifierClient(data).then(response => {
         console.log(response);
         this.modal.hide();
     });
  
  }
  
   modalclient(){
   if(this.nb=="1"){
     this.enregistrer_client();
     this.nb="0";
   }
   if(this.nb=="2"){
     this.modifierClient();
     this.nb="0";
   }
  }
  
}

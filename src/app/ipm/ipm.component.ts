import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ClientService } from '../services/client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ipm',
  templateUrl: './ipm.component.html',
  styleUrls: ['./ipm.component.css']
})

export class IpmassComponent {

  title = 'Super cloudpharma accueil';
   modal:BsModalRef;
   entreprise:string;
   adresse:string;
   telephone:string;
   limite:string;
   nb:string="0";
   prenom:string;
   nom:string;
   montant:number;
    /*title = 'Super cloudpharma accueil';
    modal:BsModalRef;
    entreprise:string;
    adresse:string;
    telephone:string;
    limite:string;
    nb:string="0";
    nom:any;
    prenom:any;
    montant:any;
    tel:any;*/
  liste:any=[{entreprise:'bbs',adresse:'foire',montant:5000},{entreprise:'afric cloud',adresse:'192.168.1.1',montant:40000}];
  constructor(private router:Router,private modalService: BsModalService,private clientService:ClientService){}
 //775864920 70000 783023474 10000
  showmodalcaissier(template:any,nb:string){
     this.nb=nb;
     this.modal = this.modalService.show(template);
  }
 //77734 200000 mouha ba/ibrahima traore 77576 300000
  hidemodalnewipm(){
    this.modal.hide();
  }
  enregistrer_client(){
    let data={entreprise:this.entreprise,adresse:this.adresse,montant:this.montant,telephone:this.telephone,montantmax:this.limite};
    this.clientService.newClient(data,"ipm").then(response => {
       console.log(response);
       this.modal.hide();
    });
  }
  
  bloquerClient(){
     this.clientService.bloquerClient("code").then(response => {
        console.log(response);
     }); 
  }
  
  modifierClient(){
     let data={prenom:this.prenom,nom:this.nom,adresse:this.adresse,tel:this.telephone,limite:this.limite};
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

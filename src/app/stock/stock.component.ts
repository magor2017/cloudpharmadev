import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  title = 'Super cloudpharma accueil';
  modal:BsModalRef;
  nom:string;
  prixs:number;
  prixv:number;
  peremption:string;
  quantite:number;
  tva:string;
  //chercher:string;
  listproduit:boolean=false;
  formmodif:boolean=false;
  peremp:boolean=false;
  bl:boolean=false;
  peremption:string;
  produits=[{nom:'mango bakhal',quantite:10,date:'8/12/2018'},{nom:'mafe yape',quantite:25,date:'8/12/2018'},{nom:'soplé',quantite:50,date:'8/12/2018'}];
  constructor(private router:Router,private modalService: BsModalService){}
  showmodalcaissier(template:any){
     this.modal = this.modalService.show(template);
  }
  toparticulier(){
    this.router.navigate(['/assistant','particulier']);
  }
  chercher(){
    this.formmodif=true;
  }
  listeproduit(){
     this.listproduit=true;
     this.peremp=false;
     this.bl=false;
  }
  perempt(){
     this.listproduit=false;
     this.bl=false;
     this.peremp=true;
  }
  affichebl(){
     this.listproduit=false;
     this.peremp=false;
     this.bl=true;
  }
  enregistrer_nouveau_produit(){
   console.log("mag");
   let data={prixs:this.prixs,prixv:this.prixv,quantite:this.quantite,tva:this.tva,peremption:this.peremption};
   console.log(data);
   this.modal.hide();
     
  }
  annuler_enregistrement_nouveau_produit(){
    this.prixs=undefined;
    this.prixv=undefined;
    this.tva=undefined;
    this.quantite=undefined;
    this.peremption=undefined;
    this.modal.hide();
  }
}

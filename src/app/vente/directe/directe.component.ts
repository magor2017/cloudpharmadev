import { Component, OnInit , TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import {Http,Headers} from '@angular/http';
import { print } from 'util';
import { parse } from 'url';
import {NgPipesModule} from 'ngx-pipes';

@Component({
  selector: 'app-directe',
  templateUrl: './directe.component.html',
  styleUrls: ['./directe.component.css']
})
export class DirecteComponent implements OnInit {
  ventesMedocs = [];
  prixTotale   = 0;
  rechercheMedoc    = false; 
  modalRef: BsModalRef;
  private headers=new Headers();

  changerMotif = null;
  p:string=undefined;
  qtP:string;
  qt:string=undefined;
  prix:string=undefined;
  idProduit:string=undefined;
  idGroup:string=undefined;

 /* medicamentsSave  = [
    {id:1,medicament:'HELICOCIN 750/500MG CP B/42',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:2,medicament:'FLOXAPEN GELU 500MG B20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:3,medicament:'ZAMUDOL LP 100MG GELULES B/10',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:4,medicament:'STAPHYPEN 500MG GELULES B/20',prix:"3151",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:5,medicament:'IXPRIM 37,5MG/325MG CPR B/20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:6,medicament:'GENES GROSSESSE CPR EFF BT12',prix:"3011",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"}
  ]*/
  medicamentsSave=[];

  medicaments = [];

  constructor(private router:Router, private modalService: BsModalService,private http:Http){
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  ngOnInit() {   
  }

  toutValider(bodyTable){
    let 
    prix,
    type,
    prixT,
    quantite,
    assurance,
    medicament,
    codeClient,
    modePayement;
        
    let trs = bodyTable.querySelectorAll('tr');
    for(let tr of trs){
        prix = (tr.querySelector('#prix')).className;
        type =  (tr.querySelector('#typeVente')).value;
        quantite =  (tr.querySelector('#quantite')).value;
        assurance =  (tr.querySelector('#assurance')).value;
        medicament =   (tr.querySelector('#medicament')).className;
        modePayement =  (tr.querySelector('#modePayement')).value;
        
        prixT = JSON.parse(prix) * JSON.parse(quantite);
        this.ventesMedocs.push({medicament:medicament ,prix:prix  , quantite :quantite ,modePayement : modePayement, assurance:assurance , type:type,prixTotal:  prixT});
       
       this.prixTotale += prixT;
    }
    console.log(this.ventesMedocs);
}

/*openModal(template: TemplateRef<any>,bodyTable:any) {
  this.toutValider(bodyTable);
  this.modalRef = this.modalService.show(template);
}*/
openModal(template: TemplateRef<any>) {
 // this.toutValider(bodyTable);
  this.modalRef = this.modalService.show(template);
}

supprimerMedoc(produit:any){
    
    let nb=this.medicaments.length;
    let tab=[];
    for(let i=0;i<nb;i++){
      if(produit.medicament!=this.medicaments[i].medicament){
         tab.push(this.medicaments[i]);
      }
    }
    this.medicaments=tab;
}

change(){
  console.log("oj na");
}

changerecherche(event){
     let params="params="+JSON.stringify({produit:(event.target).value,idUser:sessionStorage.getItem('dependOn')});
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/vente/recherchproduit";
    if(((event.target).value).trim() != ''){
    this.http.post(link,params,{headers:this.headers}).map(res =>res.json()).subscribe(response => {
          this.medicamentsSave=response;
          console.log(this.medicamentsSave);
           if(this.medicamentsSave.length!=0){
				this.rechercheMedoc = true;
				this.changerMotif  = (event.target).value;
           }else {
				this.rechercheMedoc = false;
				this.changerMotif = null;
          }
       }); 
      }else{
          this.rechercheMedoc = false;
          this.changerMotif = null;
      }
   /* if(((event.target).value).trim() != ''){
        this.rechercheMedoc = true;
        this.changerMotif  = (event.target).value;
    }
    else {
      this.rechercheMedoc = false;
      this.changerMotif = null;
    }*/
    
}
  prixtotal(){
   let prixt=0;
    for(let i = 0 ; i < this.medicaments.length ; i ++){
       prixt+=this.medicaments[i].prix*this.medicaments[i].quantite;
    }
   return prixt.toString();      
 }

  nouveauMedoc(produit:any){
     //this.medicaments.push(produit);
     this.p=produit.medicament;
     this.qtP=produit.quantite;
     this.rechercheMedoc = false;
  }
  ajout(){
   console.log(this.isProduit(this.p));
  if(parseInt(this.qt)>=1 && this.isProduit(this.p) && parseInt(this.qt)<=parseInt(this.qtP)){
    let p1={id:1,medicament:this.p,prix:this.prix,quantite:this.qt,idProduit:this.idProduit,idGroup:this.idGroup};
    this.medicaments.push(p1);
    this.rechercheMedoc = false;
    this.p=undefined;
    this.qt=undefined;
    this.prix=undefined;
    this.idProduit=undefined;
    this.idGroup=undefined;
    }else{
       if(parseInt(this.qt)>parseInt(this.qtP)){
           alert('Quantite insuffisante');
       }
    }
   
  }
  
  isProduit(p:string):boolean{
    for(let i=0;i<this.medicamentsSave.length;i++){
       if(this.medicamentsSave[i].medicament.indexOf(p)!=-1){
         this.prix=this.medicamentsSave[i].prix;
         this.idGroup=this.medicamentsSave[i].idGroupe;
         this.idProduit=this.medicamentsSave[i].idProduit;
         return true;
       }
    }
    
    return false;
  }
  
  annuler_vente(){
   this.medicaments=[];
    this.modalRef.hide();
  }

  valider_vente(){
    
    let params="params="+JSON.stringify({medoc:JSON.stringify(this.medicaments),type:'directe',montant:this.prixtotal(),dependOn:sessionStorage.getItem('dependOn'),idUser:sessionStorage.getItem('idUser'),token:sessionStorage.getItem('token')});
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/vente/directe";
      this.http.post(link,params,{headers:this.headers}).subscribe(response => {
      console.log(response);
      let data=JSON.parse(response["_body"]);
        if(data.status==1){
          this.modalRef.hide();
          console.log(response);
          this.medicaments=[];
          }
       }); 
  }
 
// calculePrixTotale (event){
//      let target = event.target;
//      let q = target.value;
//      let prix = parseInt((target.parentElement.parentElement).querySelector('#prix').className);
//      this.prixTotale += prix*q;
// }

}

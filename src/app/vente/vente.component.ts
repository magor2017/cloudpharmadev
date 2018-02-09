import { Component , TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { print } from 'util';
import { parse } from 'url';
import {NgPipesModule} from 'ngx-pipes';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})

export class VenteComponent {
  
  ventesMedocs = [];
  prixTotale   = 0;
  rechercheMedoc    = false; 
  modalRef: BsModalRef;

  changerMotif = null;

  medicamentsSave  = [
    {id:1,medicament:'HELICOCIN 750/500MG CP B/42',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:2,medicament:'FLOXAPEN GELU 500MG B20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:3,medicament:'ZAMUDOL LP 100MG GELULES B/10',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:4,medicament:'STAPHYPEN 500MG GELULES B/20',prix:"3151",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:5,medicament:'IXPRIM 37,5MG/325MG CPR B/20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:6,medicament:'GENES GROSSESSE CPR EFF BT12',prix:"3011",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"}
  ]
  medicaments = []

  constructor(private router:Router, private modalService: BsModalService){}


  toutValider(bodyTable){
      let 
      prix,
      type,
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
          
          this.ventesMedocs.push({medicament:medicament ,prix:prix  , quantite :quantite ,modePayement : modePayement, assurance:assurance , type:type,prixTotal: (parseInt(prix) * parseInt(quantite))});
         
         ;
      }
      console.log(this.ventesMedocs);
  }
  
  openModal(template: TemplateRef<any>,bodyTable:any) {
    this.toutValider(bodyTable);
    this.modalRef = this.modalService.show(template);
  }

  supprimerMedoc(event){
      let target = event.target.parentElement.parentElement;
      this.prixTotale -= parseInt((target.querySelector('#prix')).className);
      target.remove();
      return false;
  }

  changerecherche(event){
      if(((event.target).value).trim() != ''){
          this.rechercheMedoc = true;
          this.changerMotif  = (event.target).value;
      }
      else {
        this.rechercheMedoc = false;
        this.changerMotif = null;
      }
      
  }

  nouveauMedoc(event){
       let id = (event.target).id;
       let obj = JSON.parse('{'+id+'}');

      //  for(let i = 0 ; i < this.medicaments.length ; i ++)
      //     if(parseInt((this.medicaments)[i].id) == parseInt(obj.id)){
      //         this.medicaments.splice(i,1);
      //         this.prixTotale -= parseInt(obj.prix);
      //     }

       this.medicaments.push(obj);
       this.rechercheMedoc = false;
       return false;
  }
  
  calculePrixTotale (event){
       let target = event.target;
       let q = target.value;
       let prix = parseInt((target.parentElement.parentElement).querySelector('#prix').className);
       this.prixTotale += prix*q;
  }
}

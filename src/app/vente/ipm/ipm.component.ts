import { Component, OnInit , TemplateRef} from '@angular/core';
import { NgModel } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { print } from 'util';
import { parse } from 'url';
import {NgPipesModule} from 'ngx-pipes';

@Component({
  selector: 'app-ipm',
  templateUrl: './ipm.component.html',
  styleUrls: ['./ipm.component.css']
})
export class IpmComponent implements OnInit {

      matricule:string;
      designation:string;
      description:string;

      ventesMedocs = [];
      prixTotale   = 0;
      rechercheMedoc    = false;
      rechercheGroupe    = false;

      modalRef: BsModalRef;

      changerMotif = null;
      changerMotifGoup = null;

      groupes = [
             {id:1, matricule: "1ds12dsd", designation: "ecole", description: "ecole de Grand Yoff" },
             {id:2, matricule: "15sdsd", designation: "BBS investe", description: "Start-up" },
      ];

      medicamentsSave  = [
        {id:1,medicament:'HELICOCIN 750/500MG CP B/42',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
        {id:2,medicament:'FLOXAPEN GELU 500MG B20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
        {id:3,medicament:'ZAMUDOL LP 100MG GELULES B/10',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
        {id:4,medicament:'STAPHYPEN 500MG GELULES B/20',prix:"3151",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
        {id:5,medicament:'IXPRIM 37,5MG/325MG CPR B/20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
        {id:6,medicament:'GENES GROSSESSE CPR EFF BT12',prix:"3011",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"}
      ]

      medicaments = []

      constructor(private router:Router, private modalService: BsModalService) { }

      ngOnInit() {
      }

      toutValider(bodyTable){
        let
        prix,
        prixT,
        quantite,
        medicament,
        codeClient;

        let trs = bodyTable.querySelectorAll('tr');
        for(let tr of trs){
            prix = (tr.querySelector('#prix')).className;
            quantite =  (tr.querySelector('#quantite')).value;
            medicament =   (tr.querySelector('#medicament')).className;

            prixT = JSON.parse(prix) * JSON.parse(quantite);
            this.ventesMedocs.push({medicament:medicament ,prix:prix  , quantite :quantite,prixTotal:  prixT});

           this.prixTotale += prixT;
        }
        console.log(this.ventesMedocs);
    }

    openModal(template: TemplateRef<any>,bodyTable:any) {
      this.toutValider(bodyTable);
      this.modalRef = this.modalService.show(template);
    }

    supprimerMedoc(event){
        let target = event.target.parentElement.parentElement;
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
    changerechercheGroup(event){
        if(((event.target).value).trim() != ''){
            this.rechercheGroupe = true;
            this.changerMotifGoup  = (event.target).value;
        }
        else {
          this.rechercheGroupe = false;
          this.changerMotifGoup = null;
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

      nouveauGroupe(event){
           let id = (event.target).id;
           let obj = JSON.parse('{'+id+'}');

           this.matricule = obj.matricule;
           this.designation = obj.designation;
           this.description = obj.description;

           this.rechercheMedoc = false;
           return false;
      }



}

import { Component,ViewChild } from '@angular/core';
//import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel } from '@angular/forms';
//import { FormsModule,FormGroup,FormControl} from '@angular/forms';
//import { ModalDirective,ModalModule } from 'ng2-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametrecompte',
  templateUrl: './parametrecompte.component.html',
  styleUrls: ['./parametrecompte.component.css']
})
export class ParametrecompteComponent {
  title = 'Super cloudpharma accueil';
  prenom:string;
  nom:string;
  tel:string;
  data:any
  identifiant:string;
  password:string;
  modal:BsModalRef;
  caissier:any=[{prenom:'magor',nom:'sy',etat:'actif'},{prenom:'adama',nom:'goudiaby',etat:'actif'}];
  constructor(private router:Router,private modalService: BsModalService){}
 
  //@ViewChild('modalcaissier') public modalcaissier:ModalDirective;
  showmodalcaissier(template:any){
    
     this.modal = this.modalService.show(template);
  }
  
  hidemodalcaissier(){
      //this.modal = this.modalService.hide();
  }
  nouveaucaissier(){
     let caissie={prenom:this.prenom,nom:this.nom,etat:'actif'};
     this.caissier.push(caissie);
     this.modal.hide();
  }
}

import { Component,ViewChild,OnInit } from '@angular/core';
//import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel } from '@angular/forms';
//import { FormsModule,FormGroup,FormControl} from '@angular/forms';
//import { ModalDirective,ModalModule } from 'ng2-bootstrap';
import { Router } from '@angular/router';
import { Http,Headers} from '@angular/http';

@Component({
  selector: 'app-parametrecompte',
  templateUrl: './parametrecompte.component.html',
  styleUrls: ['./parametrecompte.component.css']
})
export class ParametrecompteComponent implements OnInit {
  title = 'Super cloudpharma accueil';
  prenom:string;
  nom:string;
  tel:string;
  data:any
  identifiant:string;
  password:string;
  modal:BsModalRef;
  private headers=new Headers();
  newcaissierResponse:boolean=false;
  caissier:any;
  errorid:boolean=false;
  constructor(private router:Router,private modalService: BsModalService,private http:Http){ this.headers.append('Content-Type' , 'application/x-www-form-urlencoded');}
  ngOnInit(){
     let link="http://127.0.0.1/allstockBackEnd/index.php/vente/listeCaissier";
     let params="params="+JSON.stringify({idUser:sessionStorage.getItem('idUser'),token:sessionStorage.getItem('token')});
     this.http.post(link,params,{headers:this.headers}).map(res =>res.json()).subscribe(response => {
         console.log(response);
         this.caissier=response.response;
     });
  }
  //@ViewChild('modalcaissier') public modalcaissier:ModalDirective;
  showmodalcaissier(template:any){
    
     this.modal = this.modalService.show(template);
  }
  
  hidemodalcaissier(){
      //this.modal = this.modalService.hide();
  }
  nouveaucaissier(){
     let link="http://127.0.0.1/allstockBackEnd/index.php/vente/nouveauCaissier";
     let params="params="+JSON.stringify({prenom:this.prenom,nom:this.nom,tel:this.tel,identifiant:this.identifiant,password:this.password,idUser:sessionStorage.getItem('idUser'),token:sessionStorage.getItem('token')});
     this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
        console.log(response); 
        let data=JSON.parse(response._body);
        if(data.response==true){
           //this.caissier.push();
             
             this.newcaissierResponse=true;
             this.prenom=undefined;
             this.nom=undefined;
             this.tel=undefined;
             this.identifiant=undefined;
             this.password=undefined;
             this.modal.hide();
        }else{
          this.errorid=true;
        }
     });
     
  }
 annulation(){
     
	 this.prenom=undefined;
	 this.nom=undefined;
	 this.tel=undefined;
	 this.identifiant=undefined;
	 this.password=undefined;
	 this.modal.hide();
 }
  bloquerCompte(id:any,etat:any,dependOn:any){
    let link="http://127.0.0.1/allstockBackEnd/index.php/vente/bloquerCompte";
     let params="params="+JSON.stringify({idUser:sessionStorage.getItem('idUser'),token:sessionStorage.getItem('token'),etat:etat,idCaissier:id});
     this.http.post(link,params,{headers:this.headers}).map(res =>res.json()).subscribe(response => {
         console.log(response);
         this.caissier=response.response;
         
     });
  
  }
}

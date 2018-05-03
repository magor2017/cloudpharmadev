import { Component, OnInit } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-annulation',
  templateUrl: './annulation.component.html',
  styleUrls: ['./annulation.component.css']
})
export class AnnulationComponent implements OnInit {
  historique=[];
  produits=[]
  private headers=new Headers();
  modalRef: BsModalRef;
  dateDebut:string;
  dateFin:string;

  constructor(private http:Http,private modalService: BsModalService) {this.headers.append('Content-Type', 'application/x-www-form-urlencoded'); }

  ngOnInit() {
     //let params="params="+JSON.stringify({produit:(event.target).value});
      let params="params="+"";
    let link="http://127.0.0.1/allstockBackEnd/index.php/vente/factureHistoryByDay";
    this.http.post(link,params,{headers:this.headers}).map(res =>res.json()).subscribe(response => {
            this.historique=response.factures;
            this.produits=JSON.parse(response.factures[0].infoSup);
          	console.log(JSON.parse(response.factures[0].infoSup));
       }); 
  }
  openModal(template: TemplateRef<any>,prod:any) {
 // this.toutValider(bodyTable);
  this.produits=JSON.parse(prod);
  this.modalRef = this.modalService.show(template);
}
  rechercheInterval(){
     let params="params="+JSON.stringify({debut:this.dateDebut,fin:this.dateFin});
    let link="http://127.0.0.1/allstockBackEnd/index.php/vente/factureHistoryByInterval";
    this.http.post(link,params,{headers:this.headers}).map(res =>res.json()).subscribe(response => {
            this.historique=response.factures;
            //this.produits=JSON.parse(response.factures[0].infoSup);
          	//console.log(JSON.parse(response.factures[0].infoSup));
          	console.log(response);
       }); 
  }
}

import { Component , TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel} from '@angular/forms';
import { StockService } from '../services/stock.service';
import { Http,Headers} from '@angular/http';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  title = 'Super cloudpharma accueil';
  modalRef: BsModalRef;
  nom:string;
  prixs:string;
  prixv:string;
  peremption:string;
  quantite:number;
  tva:string;
  //chercher:string;
  listproduit:boolean=false;
  formmodif:boolean=false;
  peremp:boolean=false;
  private headers=new Headers();
  existeproduit:boolean=false;
 // bl:boolean=false;
  p:string=undefined;
  reponseupdate:boolean=false;
  tvah:string;
  //produits=[{nom:'mango bakhal',quantite:10,date:'8/12/2018'},{nom:'mafe yape',quantite:25,date:'8/12/2018'},{nom:'soplé',quantite:50,date:'8/12/2018'}];
  constructor(private router:Router,private modalService: BsModalService,private stockService:StockService,private http:Http){ this.headers.append('Content-Type','application/x-www-form-urlencoded');}
   medicamentsSave  =[];
   /* [
    {id:1,medicament:'HELICOCIN 750/500MG CP B/42',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:2,medicament:'FLOXAPEN GELU 500MG B20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:3,medicament:'ZAMUDOL LP 100MG GELULES B/10',prix:"5532",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:4,medicament:'STAPHYPEN 500MG GELULES B/20',prix:"3151",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:5,medicament:'IXPRIM 37,5MG/325MG CPR B/20',prix:"3925",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"},
    {id:6,medicament:'GENES GROSSESSE CPR EFF BT12',prix:"3011",quantite:"2",type:"vente directe",modePayement:'cache',assurance:"assurance 1"}
  ];*/
  medicaments:any=[]
  section = "nouveau produit";
  action='modifier';
  classColor=["success","danger","info","warning","active"];
  classColorIterator = 0;
  founisseur:string;
  bl:string;
  date:string;
  listeDesProduitsTabSave:any;
  np:boolean=false;
  lp:boolean=false;
  rp:boolean=false;
  mp:boolean=false;
  enrbl:boolean=false;
  rbl:boolean=false;
  rechercheMedoc    = false; 
  changerMotif = null;
  tabProduit=[];
  //p:string=undefined;
  qt:string=undefined;
  prix:string=undefined;
  idProduit:string=undefined;
  idGroupe:string=undefined;
  code:string;
  //date:string;
  fournisseur:string;
  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  toparticulier(){
      this.router.navigate(['/assistant','particulier']);
  }

 affiche_np(){
   this.reinicilized();
   this.reinitialise();
   this.np=true;
 }
 affiche_lp(){
  this.reinicilized();
  this.reinitialise();
  this.lp=true;
  this.listeProduit();
 }
 affiche_rp(){
  this.reinicilized();
  this.reinitialise();
  this.rp=true;
 }
 reinitialise(){
  this.np=false;
  this.lp=false;
  this.rp=false;
  this.enrbl=false;
  this.rbl=false;
  this.mp=false;
 }
 affiche_enrbl(){
   this.reinicilized();
   this.enrbl=true;
   this.rbl=false;
 }
 affiche_rbl(){
   this.enrbl=false;
   this.reinicilized();
   this.rbl=true;
 }
 affiche_mp(){
   this.reinitialise();
   this.reinicilized();
   this.mp=true;
 }

  enregistrer_nouveau_produit(){
   console.log("mag");
   let data={prixs:this.prixs,prixv:this.prixv,quantite:this.quantite,tva:this.tva,peremption:this.peremption};
   console.log(data);
   this.stockService.newProduit(data,'type').then(response=>{
       console.log(response);
   });
  // this.modal.hide();
     
  }

  Validernouveauproduit(){
      let params="params="+JSON.stringify({nom:this.nom,prixs:this.prixs,prixv:this.prixv,peremption:this.peremption,tva:this.tva,quantite:this.quantite,idG:sessionStorage.getItem('dependOn')});
      let link="http://www.cloudpharma.org/allstockBackEnd/index.php/stock/newProduit";
      this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
         //console.log(response);
         let data=JSON.parse(response["_body"]);
         //console.log(data);
         if(data.code==true){
           this.reinicilized();
           this.modalRef.hide();
         }
         if(data.code==0){
            this.existeproduit=true;
         }
      });
      

  }
 listeProduit(){
   let params="params="+JSON.stringify({idG:sessionStorage.getItem('dependOn')});
   let link="http://www.cloudpharma.org/allstockBackEnd/index.php/stock/listeProduit";
   this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
      //  console.log(response);
        this.tabProduit=JSON.parse(response["_body"]).code;
       // console.log(this.tabProduit);
        
   });
 }
  
  reinicilized(){
      this.nom        = undefined;
      this.tva        = undefined;
      this.prixs      = undefined;
      this.prixv      = undefined;
      this.quantite   = undefined;
      this.peremption = undefined;
      this.reponseupdate=false;
      this.existeproduit=false;
  }
 changerecherche(event){
     let params="params="+JSON.stringify({produit:(event.target).value,idUser:sessionStorage.getItem('dependOn')});
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/vente/recherchproduit";
    if(((event.target).value).trim() != ''){
    this.http.post(link,params,{headers:this.headers}).map(res =>res.json()).subscribe(response => {
          this.medicamentsSave=response;
         // console.log(this.medicamentsSave);
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
 nouveauMedoc(produit:any){
     //this.medicaments.push(produit);
     this.p=produit.medicament;
     this.rechercheMedoc = false;
  }
   prixtotal(){
   let prixt=0;
    for(let i = 0 ; i < this.medicaments.length ; i ++){
       prixt+=this.medicaments[i].prix*this.medicaments[i].quantite;
    }
   return prixt.toString();      
 }
 ajout(){
    if(parseInt(this.qt)>=1 && this.isProduit(this.p)){
    let p1={medicament:this.p,quantite:this.qt,idProduit:this.idProduit,idGroupe:this.idGroupe,peremption:this.peremption};
    this.medicaments.push(p1);
    this.rechercheMedoc = false;
    this.p=undefined;
    this.qt=undefined;
    this.prix=undefined;
    this.idProduit=undefined;
    this.idGroupe=undefined;
    this.peremption=undefined;
    }
 }
 isProduit(p:string):boolean{
    for(let i=0;i<this.medicamentsSave.length;i++){
       if(this.medicamentsSave[i].medicament.indexOf(p)!=-1){
         this.prix=this.medicamentsSave[i].prix;
         this.idGroupe=this.medicamentsSave[i].idGroupe;
         this.idProduit=this.medicamentsSave[i].idProduit;
         return true;
       }
    }
    
    return false;
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
  validerbl(){
   if(this.fournisseur!="" && this.code!="" && this.medicaments.length>0){
        // console.log(this.medicaments);
		 let f=this.fournisseur.split('/');
		 let link="http://www.cloudpharma.org/allstockBackEnd/index.php/stock/newBl";
		 let params="params="+JSON.stringify({idGroupe:this.medicaments[0].idGroupe,produits:JSON.stringify(this.medicaments),code:this.code,date:this.date,fournisseur:f[1],idFournisseur:f[0]});
		 this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
		 console.log(response);
		     let data=JSON.parse(response["_body"]);
		    // console.log(data);
		     if(data.code==true){
		       this.medicaments=[];
		       this.fournisseur=undefined;
		       this.code=undefined;
		       this.date=undefined;
		       alert('facture enregistré');
			   //console.log(response);
			 }
			 if(data.code==0){
			// console.log("facture deja enregistré");
			   alert("facture deja enregistré");
			 }
		 });
     }
  }
  produitCh(p:any){
    console.log(p);
    this.nom=p.medicament;
    this.prixs=p.prixs;
    this.prixv=p.prix;
    this.tva=p.tva;
    this.tvah=p.tva;
    this.peremption=p.peremption;
    this.idGroupe=p.idGroupe;
    this.idProduit=p.idProduit;
    this.rechercheMedoc = false;
  }
  updateProduit(){
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/stock/updateProduit";
    if(this.tva!=this.tvah){
       if(this.tva=="1"){
          //this.prixv+=parseFloat((parseInt(this.prixv)*18)/100);
       }
       if(this.tva=="0"){
         // this.prixv-=parseFloat((parseInt(this.prixv)*18)/100);
       }
    }
    let params="params="+JSON.stringify({nom:this.nom,prixs:this.prixs,prixv:this.prixv,tva:this.tva,peremption:this.peremption,idGroupe:this.idGroupe,idProduit:this.idProduit});
    this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
        let data=JSON.parse(response["_body"]);
        if(data.code==true){
           this.reinicilized(); 
           this.reponseupdate=true;
        }else{
           alert('Erreur reessayer svp');
           this.reponseupdate=false;
        }
       //console.log(response);
    });
  }
}

import { Component , TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel} from '@angular/forms';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  title = 'Super cloudpharma accueil';
  modalRef: BsModalRef;
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
  //produits=[{nom:'mango bakhal',quantite:10,date:'8/12/2018'},{nom:'mafe yape',quantite:25,date:'8/12/2018'},{nom:'soplé',quantite:50,date:'8/12/2018'}];
  constructor(private router:Router,private modalService: BsModalService,private stockService:StockService){}

  section = "nouveau produit";
  action='modifier';
  classColor=["success","danger","info","warning","active"];
  classColorIterator = 0;
  founisseur:string;
  bl:string;
  date:string;
  listeDesProduitsTabSave:any;


  listeDesProduitsTab=[
      {
        nom: "medoc1",
        tva: "tva1",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
      },

      {
        nom: "medoc2",
        tva: "tva2",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
      },

      {
        nom: "medoc3",
        tva: "tva3",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
      }
  ];

  supprimerProduitsTab=[
    {
      nom: "medoc1",
      tva: "tva1",
      prixSession: 12,
      prixVente: 15,
      quantite: 50,
      peremption: "quantite"
    },

    {
      nom: "medoc2",
      tva: "tva2",
      prixSession: 12,
      prixVente: 15,
      quantite: 50,
      peremption: "quantite"
    },

    {
      nom: "medoc3",
      tva: "tva3",
      prixSession: 12,
      prixVente: 15,
      quantite: 50,
      peremption: "quantite"
    }
];

  nouveauxProduitsTab=[
     {
        nom: "medoc1",
        tva: "tva1",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
     },

     {
        nom: "medoc2",
        tva: "tva2",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
     },

     {
        nom: "medoc3",
        tva: "tva3",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
     }
  ];

  reaproProduitsTab=[
    {
      nom: "medoc1",
      tva: "tva1",
      prixSession: 12,
      prixVente: 15,
      quantite: 50,
      peremption: "quantite"
    },

    {
      nom: "medoc2",
      tva: "tva2",
      prixSession: 12,
      prixVente: 15,
      quantite: 50,
      peremption: "quantite"
    },

    {
      nom: "medoc3",
      tva: "tva3",
      prixSession: 12,
      prixVente: 15,
      quantite: 50,
      peremption: "quantite"
    }
];

  modifierProduitsTab=[
      {
        nom: "medoc1",
        tva: "tva1",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
      },

      {
        nom: "medoc2",
        tva: "tva2",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
      },

      {
        nom: "medoc3",
        tva: "tva3",
        prixSession: 12,
        prixVente: 15,
        quantite: 50,
        peremption: "quantite"
      }
 ];
  

 // constructor(private router:Router,private modalService: BsModalService){}

 nouveauProduisTab=[
  {
    nom: "medoc1",
    tva: "tva1",
    prixSession: 12,
    prixVente: 15,
    quantite: 50,
    peremption: "quantite"
  },

  {
    nom: "medoc2",
    tva: "tva2",
    prixSession: 12,
    prixVente: 15,
    quantite: 50,
    peremption: "quantite"
  },

  {
    nom: "medoc3",
    tva: "tva3",
    prixSession: 12,
    prixVente: 15,
    quantite: 50,
    peremption: "quantite"
  }
];

  constructor(private router:Router,private modalService: BsModalService){}


  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  toparticulier(){
      this.router.navigate(['/assistant','particulier']);
  }



  enregistrer_nouveau_produit(){
   console.log("mag");
   let data={prixs:this.prixs,prixv:this.prixv,quantite:this.quantite,tva:this.tva,peremption:this.peremption};
   console.log(data);
   this.stockService.newProduit(data,'type').then(response=>{
       console.log(response);
   });
   this.modal.hide();
     
  }


  modifierroduit(i:any){
      this.nom        = this.listeDesProduitsTab[i].nom;
      this.tva        = this.listeDesProduitsTab[i].tva;
      this.prixs      = this.listeDesProduitsTab[i].prixSession;
      this.prixv      = this.listeDesProduitsTab[i].prixVente;
      this.peremption = this.listeDesProduitsTab[i].peremption;
      this.quantite   = this.listeDesProduitsTab[i].quantite; 
  }


    Validerreaproproduit(){
        
      let indexTest = this.reaproProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));

      let index = this.listeDesProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));
      
      if(index && !indexTest)
        this.reaproProduitsTab.push(this.listeDesProduitsTab[index]);

      this.reinicilized();
      this.modalRef.hide();

  }

  Validernouveauproduit(){
      
      let indexTest = this.nouveauProduisTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));

      let index = this.listeDesProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));
      
      if(index && !indexTest)
        this.nouveauProduisTab.push(this.listeDesProduitsTab[index]);

      this.reinicilized();
      this.modalRef.hide();

  }

  Validermodifierproduit(){
      let indexTest = this.modifierProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));

      let index = this.listeDesProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));
      
      if(index && !indexTest)
        this.modifierProduitsTab.push(this.listeDesProduitsTab[index]);

      this.reinicilized();
      this.modalRef.hide();

  }

  ValiderSupprimerProduit(){
      let indexTest = this.supprimerProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));

      let index = this.listeDesProduitsTab.findIndex(
      item => ( item.nom === this.nom && 
                item.tva === this.tva &&
                item.prixSession === this.prixs && 
                item.prixVente === this.prixv && 
                item.quantite === this.quantite &&
                item.peremption === this.peremption 
      ));

      if(index && !indexTest)
      this.supprimerProduitsTab.push(this.listeDesProduitsTab[index]);

      this.reinicilized();
      this.modalRef.hide();
  }

  annulerProduit(i:number){
      if(this.action==='modifier'){
          this.modifierProduitsTab.splice(i,1);
      }

      if(this.action==='supprimer'){
          this.supprimerProduitsTab.splice(i,1);
      }

      if(this.action==='nouveau'){
          this.nouveauProduisTab.splice(i,1);
      }

      if(this.action==='reapro'){
        this.reaproProduitsTab.splice(i,1);
      }
  }


  toutValider(){
     if(this.modifierProduitsTab.length != 0)
     {
        //service de modification de produits
     }

     if(this.supprimerProduitsTab.length != 0)
     {
        //service de suppression de produits
     }

     if(this.nouveauProduisTab.length != 0)
     {
        //service d'Ajout de nouveau produits
     }

     if(this.reaproProduitsTab.length != 0)
     {
        //service d'Ajout de nouveau produits
     }
       
  }

  reinicilized(){
      this.nom        = null, 
      this.tva        = null,
      this.prixs      = null,
      this.prixv      = null, 
      this.quantite   = null,
      this.peremption = null
  }



}

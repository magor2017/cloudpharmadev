import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annulation',
  templateUrl: './annulation.component.html',
  styleUrls: ['./annulation.component.css']
})
export class AnnulationComponent implements OnInit {
  historique=[{produit:'aspirine',qt:10,prix:5000},{produit:'aspirine',qt:10,prix:5000}];

  constructor() { }

  ngOnInit() {
  }
  annuler_vente(){
   alert("vente annulée");
  }
}

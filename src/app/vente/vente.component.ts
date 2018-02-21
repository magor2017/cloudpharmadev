import { Component , TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { print } from 'util';
import { parse } from 'url';


@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})

export class VenteComponent {
  onglet = 'directe';

  constructor(private router:Router){}

  // calculePrixTotale (event){
  //      let target = event.target;
  //      let q = target.value;
  //      let prix = parseInt((target.parentElement.parentElement).querySelector('#prix').className);
  //      this.prixTotale += prix*q;
  // }

  changeOnglet(onglet){
     this.onglet = onglet;
  }
}

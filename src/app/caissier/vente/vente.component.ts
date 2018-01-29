import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent {
  title = 'Super cloudpharma accueil';
  constructor(private router:Router){}
}

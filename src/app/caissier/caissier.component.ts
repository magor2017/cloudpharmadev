import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent {
  title = 'Super cloudpharma accueil';
  constructor(private router:Router){}
}

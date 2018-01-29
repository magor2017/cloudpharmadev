import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Super cloudpharma accueil';
  constructor(private router:Router){}
  connection(){
    this.router.navigate(['/vente']);
  }
}

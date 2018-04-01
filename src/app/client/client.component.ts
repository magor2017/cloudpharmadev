import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  title = 'Super cloudpharma accueil';
  constructor(private router:Router){}
  toparticulier(){
    this.router.navigate(['/assistant','particulier']);
  }
}

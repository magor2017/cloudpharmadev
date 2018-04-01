import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent {
  title = 'Super cloudpharma accueil';
  
  constructor(private router:Router){}
}

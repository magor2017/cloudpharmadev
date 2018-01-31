import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
 
  @Input() dashboard:boolean= false;
  @Input() vente:boolean= false;
  @Input() histoire:boolean= false;
  @Input() profile:boolean= false;


  constructor() { }

  ngOnInit() {
  }

}

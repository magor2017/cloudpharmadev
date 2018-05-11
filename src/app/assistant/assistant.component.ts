import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Headers} from '@angular/http';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent {
  title = 'Super cloudpharma accueil';
  private headers=new Headers();
  
  constructor(private router:Router,private http:Http){ 
    this.headers.append('Content-Type','application/x-www-form-urlencoded');
  }
  deconnection(){
   let link="http://127.0.0.1/allstockBackEnd/index.php/vente/deconnection";
   let params="params="+JSON.stringify({idUser:sessionStorage.getItem('idUser'),token:sessionStorage.getItem('token')});
   this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
      console.log(response);
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('idUser');
      this.router.navigate(['/login']); 
   });
  }
}

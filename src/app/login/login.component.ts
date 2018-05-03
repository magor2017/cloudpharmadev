import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Headers} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Super cloudpharma accueil';
  identifiant:string;
  password:string;
  private headers=new Headers();
  error:boolean=false;

  constructor(private router:Router,private http:Http){this.headers.append('Content-Type','application/x-www-form-urlencoded');}

  connection(){
    let params="params="+JSON.stringify({ident:this.identifiant,pass:this.password});
    let link="http://127.0.0.1/allstockBackEnd/index.php/vente/connection";
    this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
       let data=JSON.parse(response._body);
       if(data.err==1){
           console.log(data);
           switch(data.status.accesslevel){
             case "1":{
                  this.router.navigate(['/caissier']); 
                  break;
             }
             case "2":{
                   this.router.navigate(['/assistant']);
                   break;
             }
             default: break;
           
           }
       }
       if(data.err==-1){
         this.error=true;
       }
    });
    //this.router.navigate(['/vente']);
  }
  
}

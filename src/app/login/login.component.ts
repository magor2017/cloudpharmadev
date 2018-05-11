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
  comptebloquer:boolean=false;

  constructor(private router:Router,private http:Http){
         this.headers.append('Content-Type','application/x-www-form-urlencoded');
         sessionStorage.removeItem('token');
         sessionStorage.removeItem('idUser');
         sessionStorage.removeItem('dependOn');
         }

  connection(){
    let params="params="+JSON.stringify({ident:this.identifiant,pass:this.password});
    let link="http://127.0.0.1/allstockBackEnd/index.php/vente/connection";
    if(this.identifiant!=undefined && this.password.length!=undefined){
    this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
    //console.log(response);
       let data=JSON.parse(response._body);
       //console.log(data);
       if(data.err==1){
           console.log(data);
           if(data.status.etat=="1"){
           switch(data.status.accesslevel){
             case "1":{
                  sessionStorage.setItem('token',data.token);
                  sessionStorage.setItem('idUser',data.status.idUser);
                  sessionStorage.setItem('dependOn',data.status.dependOn);
                  console.log(sessionStorage.getItem('token'));
                  this.router.navigate(['/caissier']); 
                  break;
             }
             case "2":{
                   sessionStorage.setItem('token',data.token);
                   sessionStorage.setItem('idUser',data.status.idUser);
                   sessionStorage.setItem('dependOn',data.status.dependOn);
                   console.log(sessionStorage.getItem('token'));
                   this.router.navigate(['/assistant']);
                   break;
             }
             default: break;
           
           }
          }else{
            this.comptebloquer=true; 
          }
       }
       if(data.err==-1){
         this.error=true;
       }
     });
    }
    //this.router.navigate(['/vente']);
  }
  
}

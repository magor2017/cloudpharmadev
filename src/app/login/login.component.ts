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
        // this.headers.append('Access-Control-Allow-Origin', '*');
        // this.headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers');
        // this.headers.append('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
         sessionStorage.removeItem('token');
         sessionStorage.removeItem('idUser');
         sessionStorage.removeItem('dependOn');
         }
   errorfunction(){
     this.error=false;
     this.comptebloquer=false;
   }

  connection(){
    let params="params="+JSON.stringify({ident:this.identifiant,pass:this.password});
   // let link="http://www.cloudpharma.org/backend/connection.php";
   // let link="http://www.cloudpharma.org/allstockBackEnd/index.php/vente/connection";
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/vente/connection";
    if(this.identifiant!=undefined && this.password.length!=undefined){
    this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
      // console.log(response);
       let data=JSON.parse(response["_body"]);
       if(data.err==1){
           if(data.status.etat=="1"){
           switch(data.status.accesslevel){
             case "1":{
                  sessionStorage.setItem('token',data.token);
                  sessionStorage.setItem('idUser',data.status.idUser);
                  sessionStorage.setItem('dependOn',data.status.dependOn);
                  this.router.navigate(['/caissier']); 
                  break;
             }
             case "2":{
                   sessionStorage.setItem('token',data.token);
                   sessionStorage.setItem('idUser',data.status.idUser);
                   sessionStorage.setItem('dependOn',data.status.dependOn);
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
  }
  
}

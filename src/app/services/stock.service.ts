import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StockService {
  private headers=new Headers();
 
  constructor(private http:Http) {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
   }

  newProduit(data:any,type:string){
    
    let params="params="+JSON.stringify(data);
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/stock/newProduit";
   return new Promise( (resolve, reject) => {
    this.http.post(link,params,{headers:this.headers}).subscribe(response =>{
        console.log(response);
        resolve(response);
    });
   }
  );
  }
  
  bloquerClient(data:any){
    let params="params="+JSON.stringify(data);
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/client/bloquerclient";
    return new Promise((resolve,reject)=> {
     this.http.post(link,params,{headers:this.headers}).subscribe(response => {
       console.log(response);
       resolve(response);
     });
    });
  }
 
  modifierClient(data:any){
    let params="params="+JSON.stringify(data);
    let link="http://www.cloudpharma.org/allstockBackEnd/index.php/client/modifierclient";
    return new Promise((resolve,reject)=> {
     this.http.post(link,params,{headers:this.headers}).subscribe(response => {
       console.log(response);
       resolve(response);
     });
    });
  }

}

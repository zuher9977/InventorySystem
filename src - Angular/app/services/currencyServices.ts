import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { currencyModel } from "../Data/currencyModel";

@Injectable()
export class currencyServices{
    httpOptions
    constructor(private http:HttpClient){
        let userInfo =window.localStorage.getItem("token") as any;
        debugger
       this.httpOptions={
          
          headers:new HttpHeaders({
              

              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + userInfo,
          })
      };
     }

    addCurrency(currency:currencyModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Currency/AddCurrency",currency,this.httpOptions)
    }

    getCurrency():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Currency/getCurrency",this.httpOptions)
    }
}
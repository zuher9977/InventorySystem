import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { countryModel } from "../Data/countryModel";

@Injectable()
export class countryServices{
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

    addCountry(country:countryModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Country/AddCountry",country,this.httpOptions)
    }

    getCountry():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Country/getCountry",this.httpOptions)
    }
}
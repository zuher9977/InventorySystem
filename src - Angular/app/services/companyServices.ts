import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { companyModel } from "../Data/companyModel";

@Injectable()
export class companyServices{
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
    GetCompany():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Company/GetCompany",this.httpOptions)
    }

    updateCompany(company:companyModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Company/updateCompany",company,this.httpOptions)
    }
    insert(company:companyModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Company/insert",company,this.httpOptions)
    }


}
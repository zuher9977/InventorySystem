import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { attributeModel } from "../Data/attributeModel";

@Injectable()
export class attributeServices{
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
    addAttribute(att:attributeModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Attribute/AddAttribute",att,this.httpOptions)
    }

    getAttribute():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Attribute/LoadAllwithc",this.httpOptions)
    }
    GetAttributeById(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Attribute/GetAttributeById?id="+id,this.httpOptions)
    }
    updateAttribute(att:attributeModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Attribute/updateAttribute",att,this.httpOptions)
    }
    DeleteAttribute(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Attribute/DeleteAttribute?id="+id,this.httpOptions)
    }
}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  brandModel } from "../Data/brandModel";

@Injectable()
export class brandServices{
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
    insert(brand:brandModel):Observable<any>{
        debugger
        
        var result= this.http.post("http://localhost/InventoryWebApi/api/Brand/AddBrand",brand,this.httpOptions)
        return result
    }
    loadAll():Observable<any>{

        return this.http.get("http://localhost/InventoryWebApi/api/Brand/GetBrands",this.httpOptions)
     }
     remove(id:number):Observable<any>{
        
        debugger
        var result= this.http.get("http://localhost/InventoryWebApi/api/Brand/DeleteBrand?id="+id,this.httpOptions)
        return result
    }
    getById(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Brand/getBrandData?id="+id,this.httpOptions)
     }
    update(brand:brandModel):Observable<any>{
        debugger
        var result= this.http.post("http://localhost/InventoryWebApi/api/Brand/UpdateBrand",brand,this.httpOptions)
        return result
    }
}
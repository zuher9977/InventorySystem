import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StoreModel } from "../Data/StoreModel";
@Injectable()
export class storeServices{

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

    AddStore(store:StoreModel):Observable<any>{
        debugger
        return this.http.post("http://localhost/InventoryWebApi/api/Store/AddStore",store,this.httpOptions)
    }
    GetStore():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Store/GetStore",this.httpOptions)
    }
    DeleteStore(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Store/DeleteStore?id="+id,this.httpOptions)

    }
    GetStoreById(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Store/GetStoreById?id="+id,this.httpOptions)
    }
    updateStore(store:StoreModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Store/UpdateStore",store,this.httpOptions)
    }
}
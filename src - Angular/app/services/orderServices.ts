import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { orderModel } from "../Data/orderModel";

@Injectable()
export class orderServices{
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


    addorder(order:orderModel):Observable<any>{
        debugger
        return this.http.post("http://localhost/InventoryWebApi/api/Order/insert",order,this.httpOptions)
    }

    getOrders():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Order/getOrders",this.httpOptions);
    }

    getOrderById(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Order/getOrderById?id="+id,this.httpOptions);
    }
    update(order:orderModel):Observable<any>{
        debugger
        return this.http.post("http://localhost/InventoryWebApi/api/Order/update",order,this.httpOptions)
    }
    delete(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Order/delete?id="+id,this.httpOptions);
    }
}
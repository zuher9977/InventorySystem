import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { productModel } from "../Data/productModel";

@Injectable()
export class proudctServies{
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

    addProduct(product:productModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Product/addProduct",product,this.httpOptions)
    }

    getProducts():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Product/getProducts",this.httpOptions)
    }
    deleteProducts(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Product/deleteProducts?id="+id,this.httpOptions)
    }
    getProductbyId(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Product/getProductbyId?id="+id,this.httpOptions)
    }
    updateProduct(product:productModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Product/updateProduct",product,this.httpOptions)
    }

    uploadFile(fd:FormData):Observable<any>{
        debugger
        return this.http.post("http://localhost/InventoryWebApi/api/Product/uploadFile",fd,this.httpOptions)
    }
}
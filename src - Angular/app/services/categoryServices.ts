import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  CategoryModel } from "../Data/CategoryModel";
@Injectable()
export class categoryServices{


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

    AddCategory(category:CategoryModel):Observable<any>{
        debugger
        return this.http.post("http://localhost/InventoryWebApi/api/Category/AddCajegory",category,this.httpOptions)
    }
    GetCategory():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Category/GetCategories",this.httpOptions)
    }
    DeleteCategory(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Category/DeleteCategory?id="+id,this.httpOptions)

    }
    GetCategoryById(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Category/GetCategoryById?id="+id,this.httpOptions)
    }
    updateCategory(cat:CategoryModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/Category/UpdateCategory",cat,this.httpOptions)
    }
    GetCategoryByName(name:string):Observable<any>{
        debugger
        return this.http.get("http://localhost/InventoryWebApi/api/Category/GetCategoryByName?name="+name,this.httpOptions)
    }
}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { att_valuesModel } from "../Data/att_valuesModel";
@Injectable()
export class att_valuesServices{
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
    GetAtt_values(Id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/attValues/Getatt_Values?id="+Id,this.httpOptions)
    }
    addAtt_values(att:att_valuesModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/attValues/AddAttValues",att,this.httpOptions)
    }
    deleteAtt_value(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/attValues/DeleteAttValues?id="+id,this.httpOptions)
    }
    editeAtt_value(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/attValues/editeAtt_value?id="+id,this.httpOptions)
    }


    updateAtt_value(att:att_valuesModel):Observable<any>{
        return this.http.post("http://localhost/InventoryWebApi/api/attValues/updateAtt_value",att,this.httpOptions)
    }
}
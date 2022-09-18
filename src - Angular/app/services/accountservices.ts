import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { addroletousermodel } from "../Data/addroletousermodel";
import { createaccountModel } from "../Data/createaccountModel";
import { loginModel } from "../Data/loginModel";
import { roleModel } from "../Data/roleModel";


@Injectable()
export class accountservices{
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
    insert(create:createaccountModel):Observable<any>{
        debugger
        var result= this.http.post("http://localhost/InventoryWebApi/api/Account/CreateAccount/",create,this.httpOptions)
        return result
    }
    login(login:loginModel):Observable<any>{
        debugger
        var result= this.http.post("http://localhost/InventoryWebApi/api/Account/Login/",login,this.httpOptions)
        return result
    }
    addrole(role:roleModel):Observable<any>{
        debugger
        var result= this.http.post("http://localhost/InventoryWebApi/api/Account/NewRole/",role,this.httpOptions)
        return result
    }
    loadRoles():Observable<any>{
        return this.http.get("http://localhost/InventoryWebApi/api/Account/GetRoles",this.httpOptions)
     }

     getuserroles(name:string):Observable<any>{
        debugger
        var result= this.http.get("http://localhost/InventoryWebApi/api/Account/GetuserRoles?name="+name,this.httpOptions)
        return result
    }
    AddRemoveRole(role:addroletousermodel):Observable<any>{
        debugger
        var result= this.http.post("http://localhost/InventoryWebApi/api/Account/addroleuser",role,this.httpOptions)
        return result
    }
}
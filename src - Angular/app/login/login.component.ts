import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from '../Data/loginModel';
import { accountservices } from '../services/accountservices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('frm') userForm:NgForm
  issel:Boolean=false
  token:any
  showError:boolean=false
  constructor(private accountservice:accountservices,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    debugger
    var login=new loginModel()
    login.Username=this.userForm.value.txtUsername
    login.password=this.userForm.value.txtcpass
    this.issel=this.userForm.value.isSelected
    login.RememberMe=false
    this.accountservice.login(login).subscribe({
      next:data=>{
        debugger
        window.localStorage.setItem("token", data.token);
        this.router.navigate(['/']);
        this.showError=false
        setTimeout(function () { location.reload(); }, 0);
      },
      error:e=>{
        this.showError=true
      }
    })
  }

}

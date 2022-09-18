import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { createaccountModel } from '../Data/createaccountModel';
import { accountservices } from '../services/accountservices';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  showError:boolean=false
  showSUC:boolean=false
  result:string=""
  @ViewChild('frm') userForm:NgForm
  constructor(private accountservice:accountservices) { }

  ngOnInit(): void {
  }
  create(){
    debugger
    var user=new createaccountModel()
    user.username=this.userForm.value.txtUsername
    user.email=this.userForm.value.txtemail
    user.password=this.userForm.value.txtpass
    user.confirmPassword=this.userForm.value.txtconfpass
    this.accountservice.insert(user).subscribe({
      next:data=>{
        debugger
        this.showSUC=true,
        this.showError=false
        
      },
      error:e=>{this.showError=true,this.showSUC=false}
    })
  }
}

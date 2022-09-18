import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { roleModel } from '../Data/roleModel';
import { accountservices } from '../services/accountservices';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {
  lirole:roleModel[]
  @ViewChild('frm') userForm:NgForm
  constructor(private accountservice:accountservices,private router:Router) { }

  ngOnInit(): void {
    debugger
    this.accountservice.loadRoles().subscribe({
      next:data=>{
        debugger
        this.lirole=data;
        
      },
      error:e=>this.router.navigate(['/Unauthorized'])

    })
  }
  
  addRole(){
    var role=new roleModel()
    role.name=this.userForm.value.txtname
    this.accountservice.addrole(role).subscribe({
      next:data=>console.log("success"),
      error:e=>console.log(e)
    })
    window.location.reload();
  }
}

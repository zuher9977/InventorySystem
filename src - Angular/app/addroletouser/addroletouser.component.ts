import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { addroletousermodel } from '../Data/addroletousermodel';
import { roleModel } from '../Data/roleModel';
import { accountservices } from '../services/accountservices';

@Component({
  selector: 'app-addroletouser',
  templateUrl: './addroletouser.component.html',
  styleUrls: ['./addroletouser.component.css']
})
export class AddroletouserComponent implements OnInit {
  liUserRole:string[]
  liRole:roleModel[]
  @ViewChild("username") username:ElementRef
  @ViewChild("roletoadd")roletoadd:ElementRef
  constructor(private accountservices:accountservices,private router:Router) { }


  ngOnInit(): void {
    this.accountservices.loadRoles().subscribe({
      next:data=>{
        this.liRole=data
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }

  search(){
    debugger
    this.accountservices.getuserroles(this.username.nativeElement.value).subscribe({
      next:data=>{
        this.liUserRole=data
      },
      error:e=>console.log(e)
    })
    
  }

  add(){
    debugger
    var role=new addroletousermodel()
    role.username=this.username.nativeElement.value
    role.rolename=this.roletoadd.nativeElement.value
    this.accountservices.AddRemoveRole(role).subscribe({
      next:data=>{console.log(data),this.search()},
      error:e=>console.log(e)
    })
  }
}

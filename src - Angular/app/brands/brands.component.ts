import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { brandModel } from '../Data/brandModel';
import { brandServices } from '../services/brandServices';
import * as $ from 'jquery';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  @ViewChild('frm') frm:NgForm
  librand:brandModel[]
  status:boolean=false
  showEdit:boolean=false
  showAdd:boolean=true
  constructor(private brandservices:brandServices,private router:Router) { }

  ngOnInit(): void {
    this.getBrands()
  }
  check(){
    if(this.frm.value.txtstatus=='true'){
      this.status=true
    }
    else{
      this.status=false
    }
  }
  add(){
    debugger
    var brand=new brandModel()
    brand.name=this.frm.value.txtname
    this.check()
    brand.status=this.status
    this.brandservices.insert(brand).subscribe({
      next:data=>{console.log(data),this.getBrands()},
      error:e=>console.log(e)
    }) 
}


  delete(id:number){
    debugger
    this.brandservices.remove(id).subscribe({
      next:data=>{console.log(data),this.getBrands()},
      error:e=>console.log(e)
    })
  }
  getdata(id:number){
    this.brandservices.getById(id).subscribe({
      next:data=>{
        this.showEdit=true
        this.showAdd=false
        this.check()
        this.frm.form.patchValue({
        txtname:data.name,
        txtid:data.id,
        txtstatus:this.status
      })
      },
      error:e=>{console.log("unauth")
      }
    })
  }
  addnew(){
    this.showEdit=false
    this.showAdd=true
    this.frm.form.patchValue({
      txtname:"",
      txtid:"",
      txtstatus:""
    })
  }
  update(){
    var brand=new brandModel()
    brand.name=this.frm.value.txtname
    brand.id=this.frm.value.txtid
    this.check()
    brand.status=this.status
    this.brandservices.update(brand).subscribe({
      next:data=>{console.log(data),this.getBrands()},
      error:e=>{console.log(e)}
    })
  }
  getBrands(){
    this.brandservices.loadAll().subscribe({
      next:data=>{
        this.librand=data
      },
      error:e=>{console.log("unauth"),
      this.router.navigate(['/Unauthorized'])
      }
    })
  }

}


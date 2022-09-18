import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModel } from '../Data/StoreModel';
import { storeServices } from '../services/storeServices';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  @ViewChild("frm") frm:NgForm
  status:boolean
  stores:StoreModel[]
  showEdit:boolean=false
  showAdd:boolean=true
  constructor(private storeServices:storeServices,private router:Router) { }

  ngOnInit(): void {
    this.GetStores()
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
    var store=new StoreModel()
    store.name=this.frm.value.txtname
    this.check()
    store.status=this.status
    this.storeServices.AddStore(store).subscribe({
      next:data=>{console.log("success"),
      this.GetStores()},
      error:e=>console.log(e)
    })
  }
  GetStores(){
    debugger
    this.storeServices.GetStore().subscribe({
      next:data=>{this.stores=data,console.log("read all secc")},
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }

  Edit(Id:number){
    debugger
    var store=new StoreModel
    this.storeServices.GetStoreById(Id).subscribe({
      next:data=>{
        store=data,
        this.showEdit=true,
        this.showAdd=false,
        this.frm.form.patchValue({
          txtid:data.id,
          txtname:data.name,
          txtstatus:data.status
        })
      }
    })
  }

  Delete(Id:number){
    debugger
    this.storeServices.DeleteStore(Id).subscribe({
      next:data=>{console.log("success"),this.GetStores()},
      error:e=>console.log(e)
    })
  }

  addDef(){
    this.showEdit=false,
    this.showAdd=true,
    this.frm.form.patchValue({
      txtid:"",
      txtname:"",
      txtstatus:""
    })
  }
  update(){
    debugger
    var Category=new StoreModel
    Category.id=this.frm.value.txtid
    Category.name=this.frm.value.txtname
    this.check()
    Category.status=this.status
    this.storeServices.updateStore(Category).subscribe({
      next:data=>{console.log(data),this.GetStores()},
      error:e=>console.log(e)
    })
  }

}

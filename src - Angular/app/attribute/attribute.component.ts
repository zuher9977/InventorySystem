import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { attributeModel } from '../Data/attributeModel';
import { vmatt } from '../Data/vmatt';
import { attributeServices } from '../services/attributeServices';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  status:boolean
  @ViewChild("frm") frm:NgForm
  vmatt:vmatt[]
  showEdit:boolean=false
  showSave:boolean=true
  constructor(private attServices:attributeServices,private router:Router) { }

  ngOnInit(): void {
    this.GetAttribute()
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
    var att=new attributeModel()
    att.name=this.frm.value.txtname
    this.check()
    att.status=this.status
    this.attServices.addAttribute(att).subscribe({
      next:data=>{
        console.log("sucess"),
        this.GetAttribute()
      },
      error:e=>console.log(e)
    })
  }

  GetAttribute(){
    this.attServices.getAttribute().subscribe({
      next:data=>{
        debugger
        this.vmatt=data,
        console.log(data)
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }
  addValue(x:number){
    this.router.navigate(['/AttValues'],{queryParams:{id:x}})
  }

  Edit(id:any){
    this.showEdit=true
    this.showSave=false
    this.attServices.GetAttributeById(id).subscribe({
      next:data=>{
        debugger
        this.frm.form.patchValue({
          txtid:data.id,
          txtname:data.name,
          txtstatus:data.status
        })
      },
      error:e=>console.log(e)
    })
  }
  update(){
    debugger
    var att=new attributeModel()
    att.id=this.frm.value.txtid
    att.name=this.frm.value.txtname
    this.check()
    att.status=this.status
    this.attServices.updateAttribute(att).subscribe({
      next:data=>{
        console.log("sucess"),
        this.GetAttribute()
      },
      error:e=>console.log(e)
    })
  }
  deleteval(id:any){
    debugger
    this.attServices.DeleteAttribute(id).subscribe({
      next:data=>{console.log("succ"),
      this.GetAttribute()
      },
      error:e=>console.log(e)
    })
  }
  addNew(){
    this.showEdit=false
    this.showSave=true
    this.frm.form.patchValue({
      txtid:"",
      txtname:"",
      txtstatus:""
    })
  }

}

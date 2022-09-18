import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { att_valuesModel } from '../Data/att_valuesModel';
import { att_valuesServices } from '../services/att_valuesServices';

@Component({
  selector: 'app-attvalues',
  templateUrl: './attvalues.component.html',
  styleUrls: ['./attvalues.component.css']
})

export class AttvaluesComponent implements OnInit {

  showEdit:boolean=false
  showAdd:boolean=true
  att_values:att_valuesModel[]
  attId:number
  constructor(private act:ActivatedRoute,private att_valuesServices:att_valuesServices,private router:Router) { }

  @ViewChild("frm") frm:NgForm
  ngOnInit(): void {
    console.log(this.attId=this.act.snapshot.queryParams["id"])
    this.getAll()
  }
  getAll(){
    this.att_valuesServices.GetAtt_values(this.attId).subscribe({
      next:data=>{this.att_values=data},
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }

  addVlues(){
    var val=new att_valuesModel()
    val.name=this.frm.value.txtname
    val.att_id=parseInt(this.act.snapshot.queryParams["id"])
    debugger
    this.att_valuesServices.addAtt_values(val).subscribe({
      next:data=>this.getAll(),
      error:e=>e,
    })
  }
  delete(id:number){
    this.att_valuesServices.deleteAtt_value(id).subscribe({
      next:data=>this.getAll(),
      error:e=>e,
    })
  }

  edit(id:number){
    this.showEdit=true
    this.showAdd=false
    this.att_valuesServices.editeAtt_value(id).subscribe({
      next:data=>{
        this.frm.form.patchValue({
          txtid:data.id,
          txtname:data.name
        })
      },
      error:e=>e
    })
  }
  update(){
    var val=new att_valuesModel()
    val.id=this.frm.value.txtid
    val.name=this.frm.value.txtname
    val.att_id=parseInt(this.act.snapshot.queryParams["id"])
    debugger
    this.att_valuesServices.updateAtt_value(val).subscribe({
      next:data=>this.getAll(),
      error:e=>e,
    })
  }
  addNew(){
    this.showEdit=false
    this.showAdd=true
    this.frm.form.patchValue({
      txtid:"",
      txtname:"",
    })
  }

}

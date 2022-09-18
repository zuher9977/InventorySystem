import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '../Data/CategoryModel';
import { categoryServices } from '../services/categoryServices';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @ViewChild("frm") frm:NgForm
  @ViewChild("namesearch") NameForSearch:ElementRef
  status:boolean
  categories:CategoryModel[]
  showEdit:boolean=false
  showAdd:boolean=true
  constructor(private categoryServices:categoryServices,private router:Router) { }

  ngOnInit(): void {
    this.GetCategories()
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
    var cat=new CategoryModel()
    cat.name=this.frm.value.txtname
    this.check()
    cat.status=this.status
    this.categoryServices.AddCategory(cat).subscribe({
      next:data=>{console.log("success"),
      this.GetCategories()},
      error:e=>console.log(e)
    })
  }
  GetCategories(){
    debugger
    this.categoryServices.GetCategory().subscribe({
      next:data=>{this.categories=data,console.log("read all secc")},
      error:e=>this.router.navigate(['/Unauthorized'])

    })
  }

  Edit(Id:number){
    debugger
    var Category=new CategoryModel
    this.categoryServices.GetCategoryById(Id).subscribe({
      next:data=>{
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
    this.categoryServices.DeleteCategory(Id).subscribe({
      next:data=>{console.log("success"),this.GetCategories()},
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
    var Category=new CategoryModel
    Category.id=this.frm.value.txtid
    Category.name=this.frm.value.txtname
    this.check()
    Category.status=this.status
    this.categoryServices.updateCategory(Category).subscribe({
      next:data=>{console.log(data),this.GetCategories()},
      error:e=>console.log(e)
    })
  }

  search(x:any){
    debugger
 this.categoryServices.GetCategoryByName(x.target.value).subscribe({
  next:data=>this.categories=data,
  error:e=>console.log(e)
 })
  }

}

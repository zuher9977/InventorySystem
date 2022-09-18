import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { att_valuesModel } from '../Data/att_valuesModel';
import { brandModel } from '../Data/brandModel';
import { CategoryModel } from '../Data/CategoryModel';
import { productModel } from '../Data/productModel';
import { StoreModel } from '../Data/StoreModel';
import { att_valuesServices } from '../services/att_valuesServices';
import { brandServices } from '../services/brandServices';
import { categoryServices } from '../services/categoryServices';
import { proudctServies } from '../services/proudctServies';
import { storeServices } from '../services/storeServices';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  storeArr:StoreModel[]
  brandArr:brandModel[]
  categoryArr:CategoryModel[]
  colorArr:att_valuesModel[]
  sizeArr:att_valuesModel[]
  showAdd:boolean=true
  showEdit:boolean=false
  @ViewChild('frm') frm:NgForm
  status:boolean
  selectedFile:File
  filePath:string
  showSUC:boolean=false
  constructor(private http:HttpClient,private router:Router,private act:ActivatedRoute,private storeServices:storeServices,private brandServices:brandServices,private categoryServices:categoryServices,private att_valuesServices:att_valuesServices,private productServices:proudctServies) { }

  ngOnInit(): void {
    if(this.act.snapshot.queryParams["id"] ==null)
    {
    this.getStores()
    this.getBrands()
    this.getCategory()
    this.GetColors()
    this.GetSizes()
    this.showAdd=true
    this.showEdit=false
    }
    else
    {
      this.getStores()
      this.getBrands()
      this.getCategory()
      this.GetColors()
      this.GetSizes()
      this.getProductById()
    }
    
  }
  getStores(){
    this.storeServices.GetStore().subscribe({
      next:data=>{
        console.log(data),
        this.storeArr=data
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }
  getBrands(){
    this.brandServices.loadAll().subscribe({
      next:data=>{
        console.log(data),
        this.brandArr=data
      },
      error:e=>console.log(e)
    })
  }

  getCategory(){
    this.categoryServices.GetCategory().subscribe({
      next:data=>{
        console.log(data),
        this.categoryArr=data
      },
      error:e=>console.log(e)
    })
  }
  GetColors(){
    this.att_valuesServices.GetAtt_values(5).subscribe({
      next:data=>{this.colorArr=data,
      console.log(data)},
      error:e=>console.log(e)
    })
  }
  GetSizes(){
    this.att_valuesServices.GetAtt_values(6).subscribe({
      next:data=>{this.sizeArr=data,
      console.log(data)},
      error:e=>console.log(e)
    })
  }
  addProduct(){
    var product=new productModel()
    debugger
    product.brand_id=parseInt(this.frm.value.txtbrand)
    product.category_id=parseInt(this.frm.value.txtcategory)
    product.color_id=parseInt(this.frm.value.txtcolor)
    product.size_id=parseInt(this.frm.value.txtsize)
    product.desc=this.frm.value.txtdesc
    product.price=parseInt(this.frm.value.txtprice)
    product.qty=parseInt(this.frm.value.txtqty)
    product.sku=this.frm.value.txtsku
    product.store_id=parseInt(this.frm.value.txtstore)
    product.name=this.frm.value.txtname
    product.imgPath=this.filePath
    this.check()
    product.avi=this.status
    this.productServices.addProduct(product).subscribe({
      next:data=>this.showSUC=true,
      error:e=>console.log(e)
    })
  }
  check(){
    if(this.frm.value.txtavi=='true'){
      this.status=true
    }
    else{
      this.status=false
    }
  }
  update(){
    var product=new productModel()
    debugger
    product.id=parseInt(this.frm.value.txtid)
    product.brand_id=parseInt(this.frm.value.txtbrand)
    product.category_id=parseInt(this.frm.value.txtcategory)
    product.color_id=parseInt(this.frm.value.txtcolor)
    product.size_id=parseInt(this.frm.value.txtsize)
    product.desc=this.frm.value.txtdesc
    product.price=parseInt(this.frm.value.txtprice)
    product.qty=parseInt(this.frm.value.txtqty)
    product.sku=this.frm.value.txtsku
    product.store_id=parseInt(this.frm.value.txtstore)
    product.name=this.frm.value.txtname
    product.imgPath=this.filePath
    this.check()
    product.avi=this.status
    this.productServices.updateProduct(product).subscribe({
      next:data=>this.showSUC=true,
      error:e=>console.log(e)
    })
  }

  getProductById(){
    this.showAdd=false
    this.showEdit=true
    this.productServices.getProductbyId(this.act.snapshot.queryParams["id"]).subscribe({
      next:data=>{
        console.log(data),
        this.frm.form.patchValue({
          txtid:data.id,
          txtname:data.name,
          txtsku:data.sku,
          txtprice:data.price,
          txtqty:data.qty,
          txtdesc:data.desc,
          txtsize:data.size_id,
          txtcolor:data.color_id,
          txtbrand:data.brand_id,
          txtcategory:data.category_id,
          txtstore:data.store_id,
          txtavi:data.avi,
          uploadimg:data.ImgPath
        })

      }
    })
  }
  img(img:any){
    this.selectedFile = <File>img.target.files[0];
    let fd=new FormData();
    fd.append("img",this.selectedFile,this.selectedFile.name)
    debugger
    this.http.post("http://localhost/InventoryWebApi/api/Product/uploadFile",fd)
    .subscribe(res => {
      this.filePath="http://localhost/InventoryWebApi/Uploads/"+ res,
      console.log(this.filePath)
    })
    
  }

}

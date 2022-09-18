import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productModel } from '../Data/productModel';
import { proudctServies } from '../services/proudctServies';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  imgp:string
  product:productModel[]
  constructor(private productServices:proudctServies,private router:Router) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productServices.getProducts().subscribe({
      next:data=>{
        this.product=data,
        this.imgp=data.ImgPath
        console.log(this.product)
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }
  Edite(id:number){
    this.router.navigate(['/product'],{queryParams:{id:id}})
  }
  Delete(id:number){
    debugger
    this.productServices.deleteProducts(id).subscribe({
      next:data=>{this.getProducts()},
      error:e=>console.log("error")
  
    })
  }

}

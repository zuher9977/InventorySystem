import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { orderModel } from '../Data/orderModel';
import { productModel } from '../Data/productModel';
import { ProductComponent } from '../product/product.component';
import { companyServices } from '../services/companyServices';
import { orderServices } from '../services/orderServices';
import { proudctServies } from '../services/proudctServies';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  @ViewChild("frm") frm:NgForm
  @ViewChild("productId") productId:ElementRef
  products:productModel[]
  vat:any
  vatfinel:any
  netfinall:any
  qtyfinal:any
  price:any
  pricefinal:any
  prodectid:string
  showAdd:boolean=true
  showEdit:boolean=false
  disc:any
  discafter:any
  showSUC:boolean=false
  constructor(private router:Router,private act:ActivatedRoute,private companyServices:companyServices,private product:proudctServies,private orderServices:orderServices) { }

  ngOnInit(): void {
    this.price=0
    this.vat=0
    this.netfinall=0
    this.qtyfinal
    this.pricefinal=0
    if(this.act.snapshot.queryParams["id"] ==null)
    {
      this.getProduct()
      this.getComp()
      this.showAdd=true
      this.showEdit=false
    }
    else{
      this.getProduct()
      this.getComp()
      this.getOrderById()
    }
  }

  getProduct(){
    this.product.getProducts().subscribe({
      next:data=>{
        this.products=data
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }
  chooseproduct(id:any){
    debugger
    this.prodectid=id.currentTarget.value
    this.product.getProductbyId(parseInt(this.prodectid)).subscribe({
      next:data=>{
        console.log(data),
        this.vatfinel=data.price*(this.vat/100),
        this.netfinall=data.price*(this.vat/100)+data.price
        this.price=data.price
        this.frm.form.patchValue({
          prodrate:data.price,
          ammount:this.price,
          prodgross:this.price,
          prodvat:this.vatfinel,
          prodnet:this.netfinall
        })
      },
      error:e=>console.log(e)
    })
  }

  getComp(){
    this.companyServices.GetCompany().subscribe({
      next:data=>{
        this.vat=data.vatcharg
      }
    })
  }
  qtychange(num:any){
    debugger
    this.qtyfinal=num.currentTarget.value
    this.pricefinal=parseFloat(this.price)*parseFloat(this.qtyfinal)
    this.vatfinel=this.qtyfinal*this.price*(this.vat/100)
    this.netfinall=this.price*this.qtyfinal+this.vatfinel
    this.frm.form.patchValue({
      ammount:this.pricefinal,
      prodgross:this.pricefinal,
      prodvat:this.vatfinel,
      prodnet:this.netfinall
    })
  }

  addnewOrder(){
    debugger
    var order=new orderModel
    order.cusAddress=this.frm.value.cusadd
    order.cusName=this.frm.value.cusname
    order.cusPhone=this.frm.value.cusph
    order.priceBefore=this.price
    order.discount=this.disc
    order.status=false

      order.totalammount=this.frm.value.prodnet
    if (this.qtyfinal == null){
      order.totalProduct=1
    }
    else{
      order.totalProduct=parseInt(this.qtyfinal)
    }

    order.product_id=parseInt(this.prodectid)

    this.orderServices.addorder(order).subscribe({
      next:data=>this.showSUC=true,
      error:e=>console.log(e)
    })
  }

  getOrderById(){
    this.showAdd=false
    this.showEdit=true
    this.orderServices.getOrderById(parseInt(this.act.snapshot.queryParams["id"])).subscribe({
      next:data=>{
        this.frm.form.patchValue({
          txtid:data.id,
          cusname:data.cusName,
          cusph:data.cusPhone,
          cusadd:data.cusAddress,
          prodrate:data.priceBefore,
          prod:data.product_id,
          prodqty:data.totalProduct,
          ammount:data.totalProduct*data.priceBefore,
          prodgross:data.totalammount-(data.priceBefore*data.totalProduct)*(this.vat/100),
          prodvat:(data.priceBefore*data.totalProduct)*(this.vat/100),
          prodnet:data.totalammount,
          status:data.status,
          proddiscount:data.discount
        })
      },
      error:e=>console.log(e)
    })
  }
  updateorder(){
    var order=new orderModel
    order.cusAddress=this.frm.value.cusadd
    order.cusName=this.frm.value.cusname
    order.discount=this.disc
    order.cusPhone=this.frm.value.cusph
    order.priceBefore=this.frm.value.prodrate
    order.id=this.frm.value.txtid
    order.totalammount=this.frm.value.prodnet
    order.totalProduct=this.frm.value.prodqty
    order.status=this.frm.value.status
    order.product_id=this.frm.value.prod
    order.discount=this.disc
    console.log(order)
    this.orderServices.update(order).subscribe({
      next:data=>this.showSUC=true
    })
  }

  discount(disc:any){
    debugger
    this.disc=disc.currentTarget.value
    console.log(this.disc*this.pricefinal/100)
    this.frm.form.patchValue({
      prodnet:this.netfinall-(this.disc*this.pricefinal/100)
    })
  }

}

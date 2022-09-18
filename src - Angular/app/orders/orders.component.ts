import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderModel } from '../Data/orderModel';
import { orderServices } from '../services/orderServices';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:orderModel[]
  constructor(private orderservices:orderServices,private router:Router) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orderservices.getOrders().subscribe({
      next:data=>this.orders=data,
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }

  edit(id:number){
    this.router.navigate(['/corder'],{queryParams:{id:id}})
  }
  delete(id:number){
    this.orderservices.delete(id).subscribe({
      next:data=>this.getOrders()
    })
  }


}

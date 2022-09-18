import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { data } from 'jquery';
import { currencyModel } from '../Data/currencyModel';
import { currencyServices } from '../services/currencyServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curren',
  templateUrl: './curren.component.html',
  styleUrls: ['./curren.component.css']
})
export class CurrenComponent implements OnInit {

  curr:currencyModel[]
  @ViewChild("name") nme:ElementRef
  constructor(private router:Router,private currencyServices:currencyServices) { }

  ngOnInit(): void {
    this.getCurrency()
  }
  add(){
    debugger
    var currency = new currencyModel()
    currency.nme=this.nme.nativeElement.value
    this.currencyServices.addCurrency(currency).subscribe({
      next:data=>this.getCurrency(),
      error:e=>console.log("error")
    })
  }
  getCurrency(){
    this.currencyServices.getCurrency().subscribe({
      next:data=>{
        debugger
        this.curr=data,
        console.log(data)
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { companyModel } from '../Data/companyModel';
import { countryModel } from '../Data/countryModel';
import { currencyModel } from '../Data/currencyModel';
import { companyServices } from '../services/companyServices';
import { countryServices } from '../services/countryServices';
import { currencyServices } from '../services/currencyServices';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @ViewChild("frm") frm:NgForm
  countries:countryModel[]
  curren:currencyModel[]
  showSUC:boolean=false
  constructor(private router:Router,private countryServices:countryServices,private currencyServices:currencyServices,private companyServices:companyServices) { }

  ngOnInit(): void {
    this.getCountry()
    this.getCurrency()
    this.getCompany()
  }

  getCountry(){
    this.countryServices.getCountry().subscribe({
      next:data=>this.countries=data,
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }
  getCurrency(){
    this.currencyServices.getCurrency().subscribe({
      next:data=>{
        this.curren=data,
        console.log(data)
      },
      error:e=>console.log(e)
    })
  }

  getCompany(){
    this.companyServices.GetCompany().subscribe({
      next:data=>{
        console.log(data);
        this.frm.form.patchValue({
          txtid:data.id,
          txtname:data.name,
          txtchrg:data.vatcharg,
          txtaddress:data.address,
          txtphone:data.phone,
          txtcountry:data.country_id,
          txtcurrn:data.currency_id
        })
      },
    error:e=>console.log(e)
  }
  )}

  update(){
    var company=new companyModel()
    company.id=this.frm.value.txtid
    company.name=this.frm.value.txtname
    company.vatcharg=parseInt(this.frm.value.txtchrg)
    company.address=this.frm.value.txtaddress
    company.phone=this.frm.value.txtphone
    company.country_id=parseInt(this.frm.value.txtcountry)
    company.currency_id=parseInt(this.frm.value.txtcurrn)

    this.companyServices.updateCompany(company).subscribe({
      next:data=>{this.showSUC=true},
      error:e=>console.log(e)
    })
  }
  add(){
    var company=new companyModel()
    company.name=this.frm.value.txtname
    company.vatcharg=parseInt(this.frm.value.txtchrg)
    company.address=this.frm.value.txtaddress
    company.phone=this.frm.value.txtphone
    company.country_id=parseInt(this.frm.value.txtcountry)
    company.currency_id=parseInt(this.frm.value.txtcurrn)

    this.companyServices.insert(company).subscribe({
      next:data=>{this.showSUC=true},
      error:e=>console.log(e)
    })
  }

}

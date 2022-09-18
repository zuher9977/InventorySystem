import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { countryModel } from '../Data/countryModel';
import { countryServices } from '../services/countryServices';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  
  countries:countryModel[]
  @ViewChild("name") name:ElementRef
  constructor(private router:Router,private countryServices:countryServices) { }

  ngOnInit(): void {
    this.getCountry()
  }
  add(){
    debugger
    var country = new countryModel()
    country.name=this.name.nativeElement.value
    this.countryServices.addCountry(country).subscribe({
      next:data=>this.getCountry(),
      error:e=>console.log("error")
    })
  }
  getCountry(){
    this.countryServices.getCountry().subscribe({
      next:data=>{
        this.countries=data
      },
      error:e=>this.router.navigate(['/Unauthorized'])
    })
  }

}

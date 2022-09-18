import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule } from '@angular/forms';
import {accountservices} from './services/accountservices';
import { NewRoleComponent } from './new-role/new-role.component';
import { AddroletouserComponent } from './addroletouser/addroletouser.component';
import { brandServices } from './services/brandServices';
import { categoryServices } from './services/categoryServices';
import { StoresComponent } from './stores/stores.component';
import { storeServices } from './services/storeServices';
import { AttributeComponent } from './attribute/attribute.component';
import { attributeServices } from './services/attributeServices';
import { AttvaluesComponent } from './attvalues/attvalues.component';
import { att_valuesServices } from './services/att_valuesServices';
import { ProductComponent } from './product/product.component';
import { productModel } from './Data/productModel';
import { proudctServies } from './services/proudctServies';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CountryComponent } from './country/country.component';
import { countryServices } from './services/countryServices';
import { currencyServices } from './services/currencyServices';
import { CurrenComponent } from './curren/curren.component';
import { CompanyComponent } from './company/company.component';
import { companyServices } from './services/companyServices';
import { CreateOrderComponent } from './create-order/create-order.component';
import { orderServices } from './services/orderServices';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"createaccount",component:CreateaccountComponent},
  {path:"login",component:LoginComponent},
  {path:"brands",component:BrandsComponent},
  {path:"category",component:CategoryComponent},
  {path:"roles",component:NewRoleComponent},
  {path:"addroletouser",component:AddroletouserComponent},
  {path:"stores",component:StoresComponent},
  {path:"Attribute",component:AttributeComponent},
  {path:"AttValues",component:AttvaluesComponent},
  {path:"product",component:ProductComponent},
  {path:"manageproduct",component:ManageProductComponent},
  {path:"Unauthorized",component:UnauthorizedComponent},
  {path:"country",component:CountryComponent},
  {path:"currency",component:CurrenComponent},
  {path:"corder",component:CreateOrderComponent},
  {path:"orders",component:OrdersComponent},
  {path:"company",component:CompanyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateaccountComponent,
    BrandsComponent,
    CategoryComponent,
    NewRoleComponent,
    AddroletouserComponent,
    StoresComponent,
    AttributeComponent,
    AttvaluesComponent,
    ProductComponent,
    ManageProductComponent,
    UnauthorizedComponent,
    CountryComponent,
    CurrenComponent,
    CompanyComponent,
    CreateOrderComponent,
    OrdersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [orderServices,companyServices,currencyServices,countryServices,accountservices,brandServices,categoryServices,storeServices,attributeServices,att_valuesServices,proudctServies],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

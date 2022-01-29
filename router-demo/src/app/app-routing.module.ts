import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [  
  {
    path : 'home' , component : HomeComponent,
    children : [
      {path : 'products' , component : ProductsComponent},      
    ]
  },
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'about-us' , component : AboutUsComponent},
  {path : 'product-detail/:id',component : ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("App Routing Module Object Created...!");
  }
}

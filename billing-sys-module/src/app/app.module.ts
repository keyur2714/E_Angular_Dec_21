import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GenerateBillComponent } from './user/generate-bill/generate-bill.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    LogoutComponent    
  ],
  imports: [
    BrowserModule,    
    FormsModule,    
    HttpClientModule,        
    //UserModule,//Eager Loading
    //AdminModule,//Eager Loading
    AppRoutingModule//Eager Loading
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor,multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule Object Created...!");
  }
}

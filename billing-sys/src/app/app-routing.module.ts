import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'about-us', component : AboutUsComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'login', component : LoginComponent},
  {path : 'logout', component : LogoutComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'user', component : UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

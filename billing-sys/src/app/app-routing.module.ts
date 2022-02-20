import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ItemsEntryComponent } from './admin/items-entry/items-entry.component';
import { ItemsComponent } from './admin/items/items.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GenerateBillComponent } from './user/generate-bill/generate-bill.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'about-us', component : AboutUsComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'login', component : LoginComponent},
  {path : 'logout', component : LogoutComponent},
  {
    path : 'admin', component : AdminComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],
    children : [
      {
        path : 'items' , component : ItemsComponent
      },
      {
        path : 'item-entry', component : ItemsEntryComponent
      }
    ]
  },
  {
    path : 'user', component : UserComponent,canActivate : [AuthGuardService],
    children : [
      {
        path : 'generate-bill', component : GenerateBillComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

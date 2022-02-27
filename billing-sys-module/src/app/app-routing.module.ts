import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'about-us', component : AboutUsComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'login', component : LoginComponent},
  {path : 'logout', component : LogoutComponent}, 
  {path : 'user',loadChildren : () => import('./user/user.module').then(u=>u.UserModule)},
  {path : 'admin',loadChildren : () => import('./admin/admin.module').then(a=>a.AdminModule)}   

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("AppRoutingModule Object Created...!");
  }
}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { AdminComponent } from "./admin.component";
import { ItemsEntryComponent } from "./items-entry/items-entry.component";
import { ItemsComponent } from "./items/items.component";

const routes : Routes = [
    {
        //path : 'admin', component : AdminComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService], //require for eager loading
        path : '', component : AdminComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],
        children : [
          {
            path : 'items' , component : ItemsComponent
          },
          {
            path : 'item-entry', component : ItemsEntryComponent
          }
        ]
    }
];

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class AdminRoutingModule{
    constructor(){
        console.log("AdminRoutingModule Object Created...!");
    }
}
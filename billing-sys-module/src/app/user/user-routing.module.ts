import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { GenerateBillComponent } from "./generate-bill/generate-bill.component";
import { UserComponent } from "./user.component";

const routes : Routes = [
    {
        //path : 'user', component : UserComponent,canActivate : [AuthGuardService],
        path : '', component : UserComponent,canActivate : [AuthGuardService],
        children : [
          {
            path : 'generate-bill', component : GenerateBillComponent
          }
        ]
    },
];

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class UserRoutingModule {
    constructor(){
        console.log("UserRoutingModule Object Created...!");
    }
}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GenerateBillComponent } from "./generate-bill/generate-bill.component";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
    declarations :[
        UserComponent,    
        GenerateBillComponent
    ],
    imports :[
        CommonModule,
        UserRoutingModule
    ]    
})
export class UserModule {
    constructor(){
        console.log("UserModule Object Created...!");
    }
}
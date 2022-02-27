import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ItemsEntryComponent } from "./items-entry/items-entry.component";
import { ItemsComponent } from "./items/items.component";

@NgModule({
    declarations :[
        AdminComponent,
        ItemsComponent,
        ItemsEntryComponent
    ],
    imports :[
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    exports :[

    ],
    providers :[

    ]
}    
)
export class AdminModule {
    constructor(){
        console.log("Admin Module Object Created...!");
    }
}
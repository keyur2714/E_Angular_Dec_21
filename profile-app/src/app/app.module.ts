import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FriendsComponent } from './friends/friends.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    FriendsComponent,
    EducationDetailsComponent,
    SkillsComponent,    
  ],
  imports: [
    BrowserModule    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Object Created...!");
  }
}

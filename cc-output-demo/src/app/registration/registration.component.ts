import { Component, OnInit } from '@angular/core';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  countryList : Lookup[] = [];
  statesList : Lookup[] = [];

  selectedCountry : Lookup;
  selectedState : Lookup;

  constructor() { }

  ngOnInit(): void {
    let country1 = new Lookup(11,"IND","India");
    let country2 = new Lookup(12,"US","United States");
    let country3 = new Lookup(13,"UK","United Kingdom");
    this.countryList = [country1,country2,country3];
    this.selectedCountry = this.countryList[0];

    let state1 = new Lookup(1,"GJ","Gujarat");
    let state2 = new Lookup(2,"MH","Maharashtra");
    let state3 = new Lookup(3,"BST","Boston");
    let state4 = new Lookup(4,"LN","Londan");
    this.statesList.push(state1);
    this.statesList.push(state2);
    this.statesList.push(state3);
    this.statesList.push(state4);
    this.selectedState = this.statesList[0];
  }

  getSelectedCountry(country) : void {
    this.selectedCountry = country;
  }
  getSelectedState(state) : void {
    this.selectedState = state;
  }
}

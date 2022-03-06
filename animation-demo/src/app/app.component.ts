import { Component, HostBinding } from '@angular/core';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/anti-clock.animations';
import { ON_OFF_ANIMATION } from './animations/on-off.animations';
import { STATE_ANIMATION } from './animations/simple-state.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    STATE_ANIMATION,
    ON_OFF_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION    
  ]
})
export class AppComponent {
  title = 'animation-demo';

  state : string = 'start';
  onOffState : string = 'on';

  toogleState() : void {
    this.state = this.state === 'start' ? 'stop' : 'start';
    this.onOffState = this.onOffState === 'on' ? 'off' : 'on';
  }

  friendsList : string[] = ["Keyur","Denish","Vinit","Ravi","Hiren"];

  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

}

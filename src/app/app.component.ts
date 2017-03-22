import { Component } from '@angular/core';
// No Angular 2 o import era no core
//import {trigger, state, style, transition } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('focusPanel', [

      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: '#eee'
      })),

      state('active', style({
        transform: 'scale(1.1)',
        backgroundColor: '#cfd8dc'
      })),

      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),


    // trigger('movePanel', [
    //   transition('void => *', [
    //     style({ transform: 'translateY(-100%)' }),
    //     animate(9000)
    //   ])
    // ])


    //multi step animation
    // trigger('movePanel', [
    //   transition('void => *', [
    //     animate(600, keyframes([
    //       style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
    //       style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
    //       style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
    //     ]))
    //   ])
    // ])


  ]
})
export class AppComponent {
  title = 'app works!';

  state: string = 'inactive';

  toggleMove(): void {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}

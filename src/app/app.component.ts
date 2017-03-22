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
    ])

  ]
})
export class AppComponent {
  title = 'app works!';

  state: string = 'inactive';

  toggleMove(): void {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}

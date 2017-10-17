import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  minDate = new Date('Oct 26 1998');
  maxDate = new Date();
  startDate = new Date('08/03/2015 9:00 AM');

  onOffSwitch = 'On';

  constructor() { }
}

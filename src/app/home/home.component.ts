import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = [
    'English',
    'Kannada',
    'Hindi',
    'Other'];

  doj: Date;

  emp = new Employee('Sudha', 'Hebbar', true, '1099', 'Kannada');

  constructor() { }

  ngOnInit() {
  }


  /* Function can be used when two-way binding is done as
    [ngModel]='emp.lastName' (ngModelChange)="lastNameToUpperCase($event)"
    instead of
    [(ngModel)]='emp.lastName'
  private lastNameToUpperCase(value: string): void {
    if (value.length > 0) {
      this.emp.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.emp.lastName = value;
    }
  }*/
}

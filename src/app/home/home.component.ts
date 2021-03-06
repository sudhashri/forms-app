import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPosterService } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = [];
  emp = new Employee('Sudha', 'Hebbar', 'Full Time Employee', '1099', 'Kannada', new Date('08/03/2015 9:00 AM'));
  hasPrimaryLangErr = false;
  hasError = false;

  minDate = new Date('Oct 26 1998');
  maxDate = new Date();

  constructor(private _formPosterService: FormPosterService) {
    this._formPosterService.getLanguages()
      .subscribe(
      data => this.languages = data.languages,
      err => {
        console.log('Get Languages error: ', err);
        this.hasError = true;
      }
      );
  }

  ngOnInit() { }

  submitForm(form: NgForm) {
    // validate form before submitting
    this.validatePrimaryLang(this.emp.primaryLang);
    if (this.hasPrimaryLangErr) {
      return;
    }
    this._formPosterService.postEmployeeForm(this.emp)
      .subscribe(
      data => {
        console.log('Success');
        console.log(data);
      },
      err => {
        console.log('Submit Form error: ' + err);
        this.hasError = true;
      }
      );
  }

  validatePrimaryLang(value): void {
    if (value === 'default') {
      this.hasPrimaryLangErr = true;
    } else {
      this.hasPrimaryLangErr = false;
    }
  }
}

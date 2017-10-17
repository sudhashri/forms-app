import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormPosterService } from './services/form-poster.service';
import { HttpModule } from '@angular/http';
import { DatepickerModule, TimepickerModule, ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

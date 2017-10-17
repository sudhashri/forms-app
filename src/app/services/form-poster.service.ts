import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../models/employee.model';


@Injectable()
export class FormPosterService {

  constructor(private _http: Http) { }

  postEmployeeForm(employee: Employee): Observable<any> {
    const body = JSON.stringify(employee);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:3100/postemployee', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLanguages(): Observable<any> {
    return this._http.get('http://localhost:3100/getLanguages')
      // .delay(5000)
      .map(this.extractLanguages)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
  }

  private extractLanguages(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    console.log('POST Error: ' + error);
    return Observable.throw(error.statusText);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // resolves the property 'map' does not exist error
import 'rxjs/add/operator/catch'; // resolves the property 'catch' does not exist

import { Postcode } from '../models/postcode'; // maps postcode object
import { PostcodeValid } from '../models/postcode-valid';

@Injectable()
export class PostcodeService {

  private _postcodeApiUrl: string = 'https://api.postcodes.io/postcodes/';
  constructor(private _http: Http) { }

  // Return postcode object from postcode string
  lookupByPostcode(param: string): Observable<Postcode> {
    return this._http.get(this._postcodeApiUrl + param)
      .map((response: Response) => <Postcode>response.json())
      .catch(this.handleError);
  }

  isPostcodeValid(param: string): Observable<PostcodeValid> {
    return this._http.get(this._postcodeApiUrl + param + '/validate')
   .map((response: Response) => <PostcodeValid>response.json())
    .catch(this.handleError);
  }

  // Handle errors.
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

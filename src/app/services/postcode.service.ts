import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // resolves the property 'map' does not exist error
import 'rxjs/add/operator/catch'; // resolves the property 'catch' does not exist

import { Postcode } from '../models/postcode'; // maps postcode object
import { PostcodeValid } from '../models/postcode-valid';
import { GoogleMapsAddress } from '../models/google-maps';

@Injectable()
export class PostcodeService {

  private _postcodeApiUrl: string = 'https://api.postcodes.io/postcodes/';
  private _googleMapsApiUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private _googleMapsKey: string = 'AIzaSyCQU3BvYvB6Pljst4Ry_rni89spYB1rh44';
  constructor(private _http: Http) { }

  // Return postcode object from postcode string
  findAddress(param: string): Observable<GoogleMapsAddress> {
    return this._http.get(this._googleMapsApiUrl + param + ',+UK&key=' + this._googleMapsKey )
      .map((response: Response) => <GoogleMapsAddress>response.json())
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

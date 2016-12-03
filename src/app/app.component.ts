import { Component } from '@angular/core';

import { PostcodeService } from './services/postcode.service';
import { Postcode } from './models/postcode';
import { PostcodeValid } from './models/postcode-valid';
import { GoogleMapsAddress } from './models/google-maps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostcodeService]
})
export class AppComponent {
  postcode: Postcode;
  search: string;
  errorMessage: string;
  fillAddress: boolean;
  address: GoogleMapsAddress;

  constructor(private _postcodeService: PostcodeService) { }

  findAddress() {
    this._postcodeService.findAddress(this.search)
      .subscribe(
      res => {
        this.address = res;
        if (this.address) { this.fillAddress = true; }
      }
      );

if (this.fillAddress) {
  console.log(this.address[0].formatted_address);
  console.log('here');
}

  }

  lookupPostcode() {
    // this._postcodeService.lookupByPostcode(this.search)
    //   // (data: Postcode) => this.postcode = data,
    //   .subscribe(
    //   res => {
    //     this.postcode = res;
    //     if (this.postcode) {
    //       this.fillAddress = true;
    //     }
    //   },
    //   error => this.errorMessage = <any>error);
  }

}

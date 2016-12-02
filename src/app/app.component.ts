import { Component } from '@angular/core';

import { PostcodeService } from './services/postcode.service';
import { Postcode } from './models/postcode';
import { PostcodeValid } from './models/postcode-valid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostcodeService]
})
export class AppComponent {
  postcodeSearch: string;
  postcode: Postcode;
  postcodeValid: PostcodeValid;
  errorMessage: string;

  constructor(private _postcodeService: PostcodeService) { }

  validatePostcode() {
  //  this._postcodeService
  //           .isPostcodeValid(this.postcodeSearch)
  //           .subscribe((data:PostcodeValid) => this.postcodeValid = data,
  //               error => console.log(error));
  //               // () => console.log(this.postcodeValid));
  }

  lookupPostcode() {

    // // if (this.postcodeSearch.length <= 0) { return; }

    // // console.log(this.validatePostcode());

    // this._postcodeService.lookupByPostcode(this.postcodeSearch)
    //   .subscribe(
    //   post => {
    //     this.postcode = post;
    //   },
    //   error => {
    //     this.errorMessage = <any>error;
    //   }
    //   );

    //   console.log(this.postcode);
  }

}

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
  postcode: Postcode;
  search: string;
  errorMessage: string;
  fillAddress: boolean;

  constructor(private _postcodeService: PostcodeService) { }

  lookupPostcode() {
    this._postcodeService.lookupByPostcode(this.search)
      // (data: Postcode) => this.postcode = data,
      .subscribe(
        res => {
          this.postcode = res;
        if (this.postcode){
this.fillAddress = true;
        }


        },
      error => this.errorMessage = <any>error);

      // check if address to be filled in.
  }

}

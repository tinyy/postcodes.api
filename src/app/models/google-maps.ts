export class GoogleMapsAddress {

    address_components: AddressComponents[];
    formatted_address: string;
}


export class AddressComponents {
    long_name: string;
    short_name: string;
    types: string;
}
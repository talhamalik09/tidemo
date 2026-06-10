import { Component } from '@angular/core';
import { OtherDetails } from './other-details/other-details';
import { PartyDetails } from './party-details/party-details';
import { AmountDetails } from './amount-details/amount-details';
import { LicenseDetails } from './license-details/license-details';

import { ValidityDetails } from './validity-details/validity-details';
import { ShipmentDetails } from './shipment-details/shipment-details';

@Component({
  selector: 'app-licenseinput-create',
  imports: [OtherDetails,PartyDetails,AmountDetails,LicenseDetails,ShipmentDetails,ValidityDetails],
  templateUrl: './licenseinput-create.html',
  styleUrl: './licenseinput-create.scss',
})
export class LicenseinputCreate {}

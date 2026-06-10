import { Component } from '@angular/core';
import { ChargeDetails } from './charge-details/charge-details';
import { PartyDetails } from './party-details/party-details';
import { OtherDetails } from './other-details/other-details';
import { FacilityDetails } from './facility-details/facility-details';
import { CustomerDetails } from './customer-details/customer-details';

@Component({
  selector: 'app-exportcreditagency-facility-create',
  imports: [CustomerDetails,ChargeDetails,PartyDetails,OtherDetails,FacilityDetails],
  templateUrl: './exportcreditagency-facility-create.html',
  styleUrl: './exportcreditagency-facility-create.scss',
})
export class ExportcreditagencyFacilityCreate {}

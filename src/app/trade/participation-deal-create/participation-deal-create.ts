import { Component } from '@angular/core';
import { ChargeDetails } from './charge-details/charge-details';
import { CustomerDetails } from './customer-details/customer-details';
import { Instructions } from './instructions/instructions';
import { OtherDetails } from './other-details/other-details';
import { ParticipantDetails } from './participant-details/participant-details';
import { ParticipationAmounts } from './participation-amounts/participation-amounts';
import { Schedules } from './schedules/schedules';
import { ParticipationDeals } from './participation-deals/participation-deals';

@Component({
  selector: 'app-participation-deal-create',
  imports: [ParticipationDeals,Schedules,ChargeDetails,CustomerDetails,Instructions,OtherDetails,ParticipantDetails,ParticipationAmounts],
  templateUrl: './participation-deal-create.html',
  styleUrl: './participation-deal-create.scss',
})
export class ParticipationDealCreate {}

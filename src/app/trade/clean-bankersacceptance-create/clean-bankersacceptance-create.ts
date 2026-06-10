import { Component } from '@angular/core';
import { PartyDetails } from './party-details/party-details';
import { PartyList } from './party-list/party-list';
import { ForeignExchangeContracts } from './foreign-exchange-contracts/foreign-exchange-contracts';
import { Charges } from './charges/charges';
import { OtherDetails } from './other-details/other-details';
import { Instructions } from './instructions/instructions';
import { DiscountDetails } from './discount-details/discount-details';
import { DraftDetails } from './draft-details/draft-details';
import { CleanBADetails } from './clean-ba-details/clean-ba-details';



@Component({
  selector: 'app-clean-bankersacceptance-create',
  imports: [PartyDetails,PartyList,ForeignExchangeContracts,Charges,OtherDetails,Instructions,DiscountDetails,CleanBADetails,DraftDetails],
  templateUrl: './clean-bankersacceptance-create.html',
  styleUrl: './clean-bankersacceptance-create.scss',
})
export class CleanBankersacceptanceCreate {}

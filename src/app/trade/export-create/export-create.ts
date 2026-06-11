import { Component } from '@angular/core';
import { PartyList } from './party-list/party-list';
import { ExportLetterOfCredit } from './export-letter-of-credit/export-letter-of-credit';
import { OtherParties } from './other-parties/other-parties';
import { OtherDetails } from './other-details/other-details';
import { ForeignExchangeContracts } from './foreign-exchange-contracts/foreign-exchange-contracts';
import { Collateral } from './collateral/collateral';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { ChargeDetails } from './charge-details/charge-details';
import { SpecialPaymentConditions } from './special-payment-conditions/special-payment-conditions';
import { AdditionalConditions } from './additional-conditions/additional-conditions';
import { Documents } from './documents/documents';
import { Goods } from './goods/goods';
import { Shipment } from './shipment/shipment';
import { AvailableByWith } from './available-by-with/available-by-with';
import { ConfirmationDetails } from './confirmation-details/confirmation-details';
import { AmountDetails } from './amount-details/amount-details';
import { AdviseDetails } from './advise-details/advise-details';
import { PartyDetails } from './party-details/party-details';


@Component({
  selector: 'app-export-create',
  imports: [OtherDetails,ForeignExchangeContracts,MarginDeposit,ChargeDetails,SpecialPaymentConditions,AdditionalConditions,Documents,Goods,Shipment,AvailableByWith,ConfirmationDetails,AmountDetails,AdviseDetails,PartyDetails,OtherParties,PartyList,ExportLetterOfCredit],
  templateUrl: './export-create.html',
  styleUrl: './export-create.scss',
})
export class ExportCreate {}

import { Component } from '@angular/core';
import { PartyDetails } from './party-details/party-details';
import { AdviseDetails } from './advise-details/advise-details';
import { AvailableByComponent } from './available-by-with/available-by-with';
import { Shipment } from './shipment/shipment';
import { Goods } from './goods/goods';
import { Documents } from './documents/documents';
import { AdditionalConditions } from './additional-conditions/additional-conditions';
import { ChargeDetails } from './charge-details/charge-details';
import { SpecialPaymentConditions } from './special-payment-conditions/special-payment-conditions';
import { PartyList } from './party-list/party-list';
import { ReimbursementDetails } from './reimbursement-details/reimbursement-details';
import { OtherDetails } from './other-details/other-details';
import { ForeignExchangeContracts } from './foreign-exchange-contracts/foreign-exchange-contracts';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { Collateral } from './collateral/collateral';
@Component({
  selector: 'app-import-create',
  imports: [Collateral,PartyDetails,AdviseDetails,AvailableByComponent,Shipment,Goods,Documents,AdditionalConditions,ChargeDetails,SpecialPaymentConditions,PartyList, ReimbursementDetails,OtherDetails,ForeignExchangeContracts,MarginDeposit],
  templateUrl: './import-create.html',
  styleUrl: './import-create.scss',
})
export class ImportCreate {}

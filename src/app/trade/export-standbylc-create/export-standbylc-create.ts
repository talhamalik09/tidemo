import { Component } from '@angular/core';
import { SpecialPaymentConditions } from './special-payment-conditions/special-payment-conditions';
import { RenewalDetails } from './renewal-details/renewal-details';
import { ReductionIncrease } from './reduction-increase/reduction-increase';
import { PartyList } from './party-list/party-list';
import { PartyDetails } from './party-details/party-details';
import { OtherParties } from './other-parties/other-parties';
import { OtherDetails } from './other-details/other-details';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { Instructions } from './instructions/instructions';
import { FxContracts } from './fx-contracts/fx-contracts';
import { ExportStandbylcDetails } from './export-standbylc-details/export-standbylc-details';
import { DeliveryOfUndertaking } from './delivery-of-undertaking/delivery-of-undertaking';
import { ConfirmationDetails } from './confirmation-details/confirmation-details';
import { Collateral } from './collateral/collateral';
import { ChargesDetails } from './charges-details/charges-details';
import { AvailableByWith } from './available-by-with/available-by-with';
import { AmountDetails } from './amount-details/amount-details';
import { AdviseDetails } from './advise-details/advise-details';

@Component({
  selector: 'app-export-standbylc-create',
  imports: [SpecialPaymentConditions,RenewalDetails,ReductionIncrease,PartyList,PartyDetails,OtherParties,OtherDetails,MarginDeposit,Instructions,FxContracts,ExportStandbylcDetails,DeliveryOfUndertaking,ConfirmationDetails,Collateral,ChargesDetails,AvailableByWith,AmountDetails,AdviseDetails],
  templateUrl: './export-standbylc-create.html',
  styleUrl: './export-standbylc-create.scss',
})
export class ExportStandbylcCreate {}

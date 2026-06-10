import { Component } from '@angular/core';
import { SpecialPaymentConditions } from './special-payment-conditions/special-payment-conditions';
import { RenewalDetails } from './renewal-details/renewal-details';
import { ReimbursementDetails } from './reimbursement-details/reimbursement-details';
import { ReductionIncrease } from './reduction-increase/reduction-increase';
import { PartyDetails } from './party-details/party-details';
import { PartyList } from './party-list/party-list';
import { OtherDetails } from './other-details/other-details';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { Instructions } from './instructions/instructions';
import { FxContracts } from './fx-contracts/fx-contracts';
import { DeliveryOfUndertaking } from './delivery-of-undertaking/delivery-of-undertaking';
import { Collateral } from './collateral/collateral';
import { ChargesDetails } from './charges-details/charges-details';
import { AvailableByWith } from './available-by-with/available-by-with';
import { AmountDetails } from './amount-details/amount-details';
import { AdviseDetails } from './advise-details/advise-details';
import { ImportstandbyLcDetails } from './importstandby-lc-details/importstandby-lc-details';
@Component({
  selector: 'app-importstandby-lc-create',
  imports: [SpecialPaymentConditions,RenewalDetails,ReimbursementDetails,ReductionIncrease,PartyDetails,PartyList,OtherDetails,MarginDeposit,Instructions,ImportstandbyLcDetails,FxContracts,DeliveryOfUndertaking,Collateral,ChargesDetails,AvailableByWith,AmountDetails,AdviseDetails],
  templateUrl: './importstandby-lc-create.html',
  styleUrl: './importstandby-lc-create.scss',
})
export class ImportstandbyLcCreate {}

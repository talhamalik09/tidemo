import { Component } from '@angular/core';
import { PartyList } from './party-list/party-list';
import { GuaranteeReimbursementDetails } from './guarantee-reimbursement-details/guarantee-reimbursement-details';
import { OtherDetails } from './other-details/other-details';
import { FxContract } from './fx-contract/fx-contract';
import { Collateral } from './collateral/collateral';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { ChargesDetails } from './charges-details/charges-details';
import { ContractDetails } from './contract-details/contract-details';
import { UndertakingDeliveryOfUndertaking } from './undertaking-delivery of-undertaking/undertaking-delivery-of-undertaking';
import { UndertakingTransferableDetails } from './undertaking-transferable-details/undertaking-transferable-details';
import { UndertakingReductionIncrease } from './undertaking-reduction-increase/undertaking-reduction-increase';
import { UndertakingRenewalDetails } from './undertaking-renewal-details/undertaking-renewal-details';
import { UndertakingUnderlyingTransaction } from './undertaking-underlying-transaction/undertaking-underlying-transaction';
import { UndertakingTermsConditions } from './undertaking-terms-conditions/undertaking-terms-conditions';
import { UndertakingDocumentInstructions } from './undertaking-document-instructions/undertaking-document-instructions';
import { UndertakingAmountDetails } from './undertaking-amount-details/undertaking-amount-details';
import { UndertakingMainDetails } from './undertaking-main-details/undertaking-main-details';
import { PartyInstructions } from './party-instructions/party-instructions';
import { PartyDetails } from './party-details/party-details';
import { OurUndertakingRequest } from './our-undertaking-request/our-undertaking-request';
import { OurUndertakingDetails } from './our-undertaking-details/our-undertaking-details';
import { InstructionReceived } from './instruction-received/instruction-received';
import { ErrorsWarnings } from './errors-warnings/errors-warnings';
@Component({
  selector: 'app-guaranteeissued-create',
  imports: [PartyList,GuaranteeReimbursementDetails,OtherDetails,FxContract,Collateral,MarginDeposit,ChargesDetails,ContractDetails,UndertakingDeliveryOfUndertaking,UndertakingTransferableDetails,UndertakingReductionIncrease,UndertakingRenewalDetails,UndertakingUnderlyingTransaction,UndertakingTermsConditions,UndertakingDocumentInstructions,UndertakingAmountDetails,UndertakingMainDetails,PartyInstructions,PartyDetails,OurUndertakingRequest,OurUndertakingDetails,ErrorsWarnings,InstructionReceived],
  templateUrl: './guaranteeissued-create.html',
  styleUrl: './guaranteeissued-create.scss',
})
export class GuaranteeissuedCreate {}

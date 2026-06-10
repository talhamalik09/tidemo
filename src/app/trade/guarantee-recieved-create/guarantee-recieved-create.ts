import { Component } from '@angular/core';
import { PartyList } from './party-list/party-list';
import { UndertakingTransferableDetails } from './undertaking-transferable-details/undertaking-transferable-details';
import { UndertakingTermsConditions } from './undertaking-terms-conditions/undertaking-terms-conditions';
import { UndertakingRenewalDetails } from './undertaking-renewal-details/undertaking-renewal-details';
import { UndertakingReductionIncrease } from './undertaking-reduction-increase/undertaking-reduction-increase';
import { UndertakingMainDetails } from './undertaking-main-details/undertaking-main-details';
import { UndertakingDocumentPresentation } from './undertaking-document-presentation/undertaking-document-presentation';
import { UndertakingAmountDetails } from './undertaking-amount-details/undertaking-amount-details';
import { UnderlyingTransaction } from './underlying-transaction/underlying-transaction';
import { PartyInstructions } from './party-instructions/party-instructions';
import { PartyDetails } from './party-details/party-details';
import { OurUndertakingDetails } from './our-undertaking-details/our-undertaking-details';
import { OurUndertakingRequest } from './our-undertaking-request/our-undertaking-request';
import { OtherParties } from './other-parties/other-parties';
import { OtherDetails } from './other-details/other-details';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { InstructionRecieved } from './instruction-recieved/instruction-recieved';
import { FxContracts } from './fx-contracts/fx-contracts';
import { DeliveryOfUndertaking } from './delivery-of-undertaking/delivery-of-undertaking';
import { ContractDetails } from './contract-details/contract-details';
import { Collateral } from './collateral/collateral';
import { ChargesDetails } from './charges-details/charges-details';

@Component({
  selector: 'app-guarantee-recieved-create',
  imports: [PartyList,UndertakingTransferableDetails,UndertakingRenewalDetails,UndertakingTermsConditions,UndertakingReductionIncrease,UndertakingMainDetails,UndertakingDocumentPresentation,UndertakingAmountDetails,UnderlyingTransaction,PartyInstructions,PartyDetails,OurUndertakingDetails,OurUndertakingRequest,OtherParties,OtherDetails,MarginDeposit,InstructionRecieved,FxContracts,DeliveryOfUndertaking,ContractDetails,Collateral,ChargesDetails],
  templateUrl: './guarantee-recieved-create.html',
  styleUrl: './guarantee-recieved-create.scss',
})
export class GuaranteeRecievedCreate {}

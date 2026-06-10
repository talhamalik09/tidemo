import { Component } from '@angular/core';

import { SpecialPaymentConditions } from './special-payment-conditions/special-payment-conditions';
import { ReimbursingDetails } from './reimbursing-details/reimbursing-details';
import { PaymentDetails } from './payment-details/payment-details';
import { PaymentAction } from './payment-action/payment-action';
import { PartyDetails } from './party-details/party-details';
import { OtherDetails } from './other-details/other-details';
import { OtherBeneficiaryBank } from './other-beneficiary-bank/other-beneficiary-bank';
import { Instructions } from './instructions/instructions';
import { Documents } from './documents/documents';
import { ClaimDetails } from './claim-details/claim-details';
import { AssociatedPaymentDetails } from './associated-payment-details/associated-payment-details';
import { AmountDetails } from './amount-details/amount-details';
import { AdditionalAmount } from './additional-amount/additional-amount';

import { FreelyNegotiableLC } from './freely-negotiablelc/freely-negotiablelc';
@Component({
  selector: 'app-freely-negotiablelc-create',
  imports: [FreelyNegotiableLC,ReimbursingDetails,AdditionalAmount,AmountDetails,AssociatedPaymentDetails,ClaimDetails,Documents,Instructions,OtherBeneficiaryBank,OtherDetails,PartyDetails,PaymentAction,PaymentDetails,SpecialPaymentConditions],
  templateUrl: './freely-negotiablelc-create.html',
  styleUrl: './freely-negotiablelc-create.scss',
})
export class FreelyNegotiablelcCreate {}

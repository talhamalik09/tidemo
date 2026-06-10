import { Component } from '@angular/core';
import { AuthorityAmount } from './authority-amount/authority-amount';
import { ChargeDetails } from './charge-details/charge-details';
import { ChargeDetailsReceived } from './charge-details-received/charge-details-received';
import { Confirmation } from './confirmation/confirmation';
import { ForeignExchangeContracts } from './foreign-exchange-contracts/foreign-exchange-contracts';
import { Instructions } from './instructions/instructions';
import { OtherDetails } from './other-details/other-details';
import { PartyDetails } from './party-details/party-details';
import { PaymentTerms } from './payment-terms/payment-terms';
import { Reimbursement } from '../reimbursement/reimbursement';
import { ReimbursementAuthority } from './reimbursement-authority/reimbursement-authority';


@Component({
  selector: 'app-reimbursement-create',
  imports: [ReimbursementAuthority,Reimbursement,PaymentTerms,PartyDetails,OtherDetails,Instructions,ForeignExchangeContracts,Confirmation,ChargeDetailsReceived,ChargeDetails,AuthorityAmount],
  templateUrl: './reimbursement-create.html',
  styleUrl: './reimbursement-create.scss',
})
export class ReimbursementCreate {}

import { Component } from '@angular/core';
import { PartyDetails } from './party-details/party-details';
import { OtherDetails } from './other-details/other-details';
import { NegotiationDetails } from './negotiation-details/negotiation-details';
import { Instructions } from './instructions/instructions';
import { FxContract } from './fx-contract/fx-contract';
import { ForeignExchangeContracts } from './foreign-exchange-contracts/foreign-exchange-contracts';
import { ChequeDetails } from './cheque-details/cheque-details';
import { ChargeDetails } from './charge-details/charge-details';
import { CashLetterDetails } from './cash-letter-details/cash-letter-details';


@Component({
  selector: 'app-outwardcash-letter-create',
  imports: [CashLetterDetails,ChargeDetails,ChequeDetails,ForeignExchangeContracts,FxContract,Instructions,NegotiationDetails,OtherDetails,PartyDetails],
  templateUrl: './outwardcash-letter-create.html',
  styleUrl: './outwardcash-letter-create.scss',
})
export class OutwardcashLetterCreate {}

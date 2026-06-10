import { Component } from '@angular/core';
import { PartyDetails } from './party-details/party-details';
import { OtherDetails } from './other-details/other-details';
import { Instructions } from './instructions/instructions';
import { FxContracts } from './fx-contracts/fx-contracts';
import { ForeignExchangeContracts } from './foreign-exchange-contracts/foreign-exchange-contracts';
import { ChequeDetails } from './cheque-details/cheque-details';
import { ChargeDetails } from './charge-details/charge-details';
import { CashLetterDetails } from './cash-letter-details/cash-letter-details';


@Component({
  selector: 'app-inwardcash-letter-create',
  imports: [CashLetterDetails,ChargeDetails,ChequeDetails,ForeignExchangeContracts,FxContracts,Instructions,OtherDetails,PartyDetails],
  templateUrl: './inwardcash-letter-create.html',
  styleUrl: './inwardcash-letter-create.scss',
})
export class InwardcashLetterCreate {}

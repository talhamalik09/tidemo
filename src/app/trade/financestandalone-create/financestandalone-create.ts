import { Component } from '@angular/core';
import { PartyList } from './party-list/party-list';
import { ForeignExchangeDetails } from './foreign-exchange-details/foreign-exchange-details';
import { Charges } from './charges/charges';
import { OtherDetails } from './other-details/other-details';
import { Collateral } from './collateral/collateral';
import { RepaymentSchedules } from './repayment-schedules/repayment-schedules';
import { InterestDetails } from './interest-details/interest-details';
import { FinanceDetails } from './finance-details/finance-details';
import { PartyDetails } from './party-details/party-details';
import { FinancingDetails } from './financing-details/financing-details';

@Component({
  selector: 'app-financestandalone-create',
  imports: [FinancingDetails,PartyDetails,FinanceDetails,InterestDetails,RepaymentSchedules,Collateral,OtherDetails,Charges,PartyList,ForeignExchangeDetails],
  templateUrl: './financestandalone-create.html',
  styleUrl: './financestandalone-create.scss',
})
export class FinancestandaloneCreate {}

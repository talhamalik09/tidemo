import { Component } from '@angular/core';
import { ErrorsWarning } from './errors-warning/errors-warning';
import { OtherDetails } from './other-details/other-details';
import { ChargeDetails } from './charge-details/charge-details';
import { Collateral } from './collateral/collateral';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { Instruction } from './instruction/instruction';
import { Shipment } from './shipment/shipment';
import { GuaranteeAmount } from './guarantee-amount/guarantee-amount';
import { PartyDetails } from './party-details/party-details';
import { ShipmentguaranteeDetails } from './shipmentguarantee-details/shipmentguarantee-details';


@Component({
  selector: 'app-shipmentguarantee-create',
  imports: [ErrorsWarning,OtherDetails,ChargeDetails,Collateral,ShipmentguaranteeDetails,PartyDetails,GuaranteeAmount,MarginDeposit,Instruction,Shipment],
  templateUrl: './shipmentguarantee-create.html',
  styleUrl: './shipmentguarantee-create.scss',
})
export class ShipmentguaranteeCreate {}

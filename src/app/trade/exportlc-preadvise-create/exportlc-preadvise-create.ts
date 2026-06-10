import { Component } from '@angular/core';
import { OtherDetails } from './other-details/other-details';
import { MarginDeposit } from './margin-deposit/margin-deposit';
import { ChargeDetails } from './charge-details/charge-details';
import { Goods } from './goods/goods';
import { Shipment } from './shipment/shipment';
import { ConfirmationDetails } from './confirmation-details/confirmation-details';
import { AvailableByWith } from './available-by-with/available-by-with';
import { AmountDetails } from './amount-details/amount-details';
import { FurtherParties } from './further-parties/further-parties';
import { ReceivedFrom } from './received-from/received-from';
import { PartyDetails } from './party-details/party-details';
import { ExportlcDetails } from './exportlc-details/exportlc-details';



@Component({
  selector: 'app-exportlc-preadvise-create',
  imports: [OtherDetails,MarginDeposit,ChargeDetails,Goods,Shipment,ConfirmationDetails,AvailableByWith,AmountDetails,FurtherParties,ReceivedFrom,PartyDetails,ExportlcDetails],
  templateUrl: './exportlc-preadvise-create.html',
  styleUrl: './exportlc-preadvise-create.scss',
})
export class ExportlcPreadviseCreate {}

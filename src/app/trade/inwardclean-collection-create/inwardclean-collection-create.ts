import { Component } from '@angular/core';
import { ThirdPartyPayment } from './third-party-payment/third-party-payment';
import { PartyDetails } from './party-details/party-details';
import { PartiesList } from './parties-list/parties-list';
import { OtherDetails } from './other-details/other-details';
import { MoreParties } from './more-parties/more-parties';
import { InterestForlatePayment } from './interest-forlate-payment/interest-forlate-payment';
import { Instructions } from './instructions/instructions';
import { Goods } from './goods/goods';
import { GeneralInstructions } from './general-instructions/general-instructions';
import { FxContract } from './fx-contract/fx-contract';
import { DraftDetails } from './draft-details/draft-details';
import { DiscountForearlyPayment } from './discount-forearly-payment/discount-forearly-payment';
import { CollectionDetails } from './collection-details/collection-details';
import { ChargeDetails } from './charge-details/charge-details';
import { AttachedDocuments } from './attached-documents/attached-documents';



@Component({
  selector: 'app-inwardclean-collection-create',
  imports: [ThirdPartyPayment,PartyDetails,PartiesList,OtherDetails,MoreParties,InterestForlatePayment,Instructions,Goods,GeneralInstructions,FxContract,DraftDetails,DiscountForearlyPayment,CollectionDetails,ChargeDetails,AttachedDocuments],
  templateUrl: './inwardclean-collection-create.html',
  styleUrl: './inwardclean-collection-create.scss',
})
export class InwardcleanCollectionCreate {}

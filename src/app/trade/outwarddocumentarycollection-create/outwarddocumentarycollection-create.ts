import { Component } from '@angular/core';
import { ErrorsWarnings } from './errors-warnings/errors-warnings';
import { OtherDetails } from './other-details/other-details';
import { AttachedDocuments } from './attached-documents/attached-documents';
import { DraftDetails } from './draft-details/draft-details';
import { GeneralDetails } from './general-details/general-details';
@Component({
  selector: 'app-outwarddocumentarycollection-create',
  imports: [GeneralDetails,ErrorsWarnings,OtherDetails,AttachedDocuments,DraftDetails],
  templateUrl: './outwarddocumentarycollection-create.html',
  styleUrl: './outwarddocumentarycollection-create.scss',
})
export class OutwarddocumentarycollectionCreate {}

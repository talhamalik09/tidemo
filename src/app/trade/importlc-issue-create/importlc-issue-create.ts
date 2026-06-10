import { Component } from '@angular/core';
import { AttachedDocuments } from './attached-documents/attached-documents';
import { ImportLetterCredit } from './import-letter-credit/import-letter-credit';
import { OtherDetails } from './other-details/other-details';
import { PartyDetails } from './party-details/party-details';



@Component({
  selector: 'app-importlc-issue-create',
  imports: [PartyDetails,OtherDetails,ImportLetterCredit,AttachedDocuments],
  templateUrl: './importlc-issue-create.html',
  styleUrl: './importlc-issue-create.scss',
})
export class ImportlcIssueCreate {}

import { Component } from '@angular/core';
import { DocumentaryCollectionLog } from './documentary-collection-log/documentary-collection-log';
import { DraftDetails } from './draft-details/draft-details';

@Component({
  selector: 'app-inwarddocumentary-collection-create',
  imports: [DraftDetails,DocumentaryCollectionLog],
  templateUrl: './inwarddocumentary-collection-create.html',
  styleUrl: './inwarddocumentary-collection-create.scss',
})
export class InwarddocumentaryCollectionCreate {}

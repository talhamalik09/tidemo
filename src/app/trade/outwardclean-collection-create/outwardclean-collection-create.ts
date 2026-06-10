import { Component } from '@angular/core';
import { OutwardClean } from './outward-clean/outward-clean';
import { DraftDetails } from './draft-details/draft-details';

@Component({
  selector: 'app-outwardclean-collection-create',
  imports: [DraftDetails,OutwardClean],
  templateUrl: './outwardclean-collection-create.html',
  styleUrl: './outwardclean-collection-create.scss',
})
export class OutwardcleanCollectionCreate {}

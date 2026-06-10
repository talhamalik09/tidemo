import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-draft-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './draft-details.html',
  styleUrl: './draft-details.scss'
})
export class DraftDetails {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      draftAgainst: ['', Validators.required],

      identifier: ['', Validators.required],

      draftText: ['', Validators.required],

      draftAmount: ['', Validators.required],

      tenor: ['', Validators.required],

      collectionAmount: ['', Validators.required],

      collectionAmountDetails: [
        '',
        [Validators.required, Validators.minLength(5)]
      ],

      preAccepted: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  draftAgainstOptions = [
    'Payment'
  ];

  tenorOptions = [
    'Sight',
    'Shipment Date',
    'Other',
    'Invoice',
    'Bill Of Lading',
    'Bill Of Exchange',
    'Arrival Of Goods',
    'Air Waybill'
  ];

}
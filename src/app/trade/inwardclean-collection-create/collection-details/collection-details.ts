import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-collection-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './collection-details.html',
  styleUrls: ['./collection-details.scss']
})
export class CollectionDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      receivedFromReference: ['', Validators.required],

      collectionAmount: ['', Validators.required],

      receivedOn: ['', Validators.required],

      documentRelease: ['', Validators.required],

      productType: ['', Validators.required],

      sharedLiability: [false],

      direct: [false],

      multiplePayments: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    console.log(this.form.value);
  }

}
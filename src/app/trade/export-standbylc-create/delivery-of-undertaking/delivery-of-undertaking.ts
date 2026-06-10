import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-delivery-of-undertaking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './delivery-of-undertaking.html',
  styleUrls: ['./delivery-of-undertaking.scss']
})
export class DeliveryOfUndertaking{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  deliveryOfUndertakingOptions = [
    'Collection',
    'Courier',
    'Mail',
    'Messenger-Hand-Deliver',
    'Other Method',
    'Registered Mail Or Air Mail'
  ];

  deliveryToOptions = [
    'Beneficiary',
    'Other Addressee'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      deliveryOfUndertaking: ['', Validators.required],
      deliveryToCollectionBy: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-delivery-of-undertaking',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './undertaking-delivery-of-undertaking.html',
  styleUrl: './undertaking-delivery-of-undertaking.scss'
})
export class UndertakingDeliveryOfUndertaking {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  deliveryOptions = [
    'Collection',
    'Courier',
    'Mail',
    'Messenger - Hand Deliver',
    'Other Method',
    'Registered Mail or Air Mail'
  ];

  collectionOptions = [
    'Beneficiary',
    'Other Addresses'
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
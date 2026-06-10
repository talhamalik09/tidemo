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
  selector: 'app-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './instructions.html',
  styleUrl: './instructions.scss'
})
export class Instructions {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      collectionDeliveryMeans: ['', Validators.required],

      returnedBillDeliveryMeans: ['', Validators.required],

      noOfPackages: ['', Validators.required],

      traceAcknowledgement: [false],
      traceAcceptance: [false],
      tracePayment: [false],

      instructionsText: ['', Validators.required],

      responseToSender: ['', Validators.required],

      specialInstructions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  deliveryOptions = [
    'First Class Mail',
    'Recorded Delivery',
    'Registered Mail',
    'Air Mail',
    'Registered Air Mail',
    'Hand Delivery',
    'Collect',
    'Courier',
    'Electronically',
    'Other'
  ];

}
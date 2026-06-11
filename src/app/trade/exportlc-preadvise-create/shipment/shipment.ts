import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './shipment.html',
  styleUrl: './shipment.scss'
})
export class Shipment {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  partialOptions = ['Allowed', 'Not Allowed', 'Conditional (see additional conditions)'];

  freightOptions = ['Collect', 'Pre Paid'];

  transhipmentOptions = ['Allowed', 'Not Allowed', 'Conditional (see additional conditions)'];

  documentOptions = [
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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formField: ['', Validators.required],
      placeOfLoadingDeparture: ['', Validators.required],
      partialShipment: ['', Validators.required],
      shipmentDate: ['', Validators.required],
      shipmentPeriod: ['', Validators.required],
      freight: ['', Validators.required],
      presentationPeriodDays: ['', Validators.required],
      documentsToBeSentBy: ['', Validators.required],
      to: ['', Validators.required],
      placeOfDischargeDestination: ['', Validators.required],
      transhipment: ['', Validators.required],
      placeName: ['', Validators.required],
      insuranceForBuyer: [false],
      presentationPeriodNarrative: ['', Validators.required],
      noOfPackages: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators,FormGroup } from '@angular/forms';
import {  NgFor } from '@angular/common';
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
  form : FormGroup;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  constructor(private fb: FormBuilder) {

  this.form = this.fb.group({
    from: ['', Validators.required],
    placeOfLoading: ['', Validators.required],
    partialShipments: ['', Validators.required],
    shipmentDate: ['', Validators.required],
    shipmentPeriod: ['', [Validators.required, Validators.minLength(5)]],
    to: ['', Validators.required],
    placeOfDischarge: ['', Validators.required],
    transhipment: ['', Validators.required],
    incoterms: ['', Validators.required],
    freight: ['', Validators.required],
    transportMode: ['', Validators.required],
    presentationDays: ['', [Validators.required, Validators.min(1)]],
    documentsBy: ['', Validators.required],
    place: ['', Validators.required],
    insurance: [false],
    narrative: ['', [Validators.required, Validators.minLength(10)]],
    packages: ['', [Validators.required, Validators.min(1)]]
  });}

  save() {
    if (this.form.valid) {
      console.log('Shipment Data:', this.form.value);
    }
  }

  // DROPDOWNS
  partialOptions = [
    'Not Allowed',
    'Allowed',
    'Conditional (see additional conditions)'
  ];

  transhipmentOptions = [
    'Not Allowed',
    'Allowed',
    'Conditional (see additional conditions)'
  ];

  freightOptions = ['Collect', 'Prepaid'];

  transportOptions = [
    'Air',
    'Sea',
    'Rail',
    'Road',
    'Multimodal',
    'Any Other'
  ];

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
}
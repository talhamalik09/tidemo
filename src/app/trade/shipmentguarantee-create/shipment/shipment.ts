import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './shipment.html',
  styleUrl: './shipment.scss'
})
export class Shipment {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      flightNumber: ['', Validators.required],
      departureAirport: ['', Validators.required],
      arrivalAirport: ['', Validators.required],
      descriptionOfGoods: ['', Validators.required],
      packingMarks: ['', Validators.required],
      counterGuaranteeReference: ['', Validators.required],
      shipmentAmount: ['', Validators.required],
      reference: ['', Validators.required],
      flightDate: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  typeOptions = [
    'Air Waybill',
    'Bill of Lading'
  ];

  more() {
    console.log('More clicked');
  }
}
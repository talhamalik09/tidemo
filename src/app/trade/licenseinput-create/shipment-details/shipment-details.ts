import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-shipment-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './shipment-details.html',
  styleUrl: './shipment-details.scss'
})
export class ShipmentDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      incoterms: ['', Validators.required],

      countryOfOrigin: ['', Validators.required],

      goodsCode: ['', Validators.required],

      countryOfSupply: ['', Validators.required],

      goodsDescriptions: ['', Validators.required],

      additionalInformation: ['', Validators.required],

      narrative: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
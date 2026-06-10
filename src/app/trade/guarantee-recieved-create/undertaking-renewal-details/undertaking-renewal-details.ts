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
  selector: 'app-undertaking-renewal-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './undertaking-renewal-details.html',
  styleUrls: ['./undertaking-renewal-details.scss']
})
export class UndertakingRenewalDetails{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  renewalBasisOptions = [
    'First / Rolling Renewal',
    'Regular Renewal'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      renewalBasis: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
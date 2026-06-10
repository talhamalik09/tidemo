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
  selector: 'app-renewal-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './renewal-details.html',
  styleUrls: ['./renewal-details.scss']
})
export class RenewalDetails{

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
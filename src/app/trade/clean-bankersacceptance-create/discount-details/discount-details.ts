import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-discount-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './discount-details.html',
  styleUrl: './discount-details.scss'
})
export class DiscountDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      discountAcceptance: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
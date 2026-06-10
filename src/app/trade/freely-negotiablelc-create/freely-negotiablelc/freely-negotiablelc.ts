import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-freely-negotiablelc',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './freely-negotiablelc.html',
  styleUrl: './freely-negotiablelc.scss'
})
export class FreelyNegotiableLC {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  productTypeOptions: string[] = [
    '<--->'
  ];

  confirmationOptions: string[] = [
    'Unconfirmed'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      issueDate: ['', Validators.required],

      expiryDate: ['', Validators.required],

      expiryPlace: ['', Validators.required],

      availableAmount: ['', Validators.required],

      availableBy: ['', Validators.required],

      confirmation: [{ value: 'Unconfirmed', disabled: true }],

      productType: ['', Validators.required],

      optionContractHeld: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
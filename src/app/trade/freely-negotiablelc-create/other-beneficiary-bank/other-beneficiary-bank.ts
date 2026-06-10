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
  selector: 'app-other-beneficiary-bank',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './other-beneficiary-bank.html',
  styleUrl: './other-beneficiary-bank.scss'
})
export class OtherBeneficiaryBank {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      account: ['', Validators.required],

      otherBeneficiaryBankName: ['', Validators.required],

      otherBeneficiaryBankAddress: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
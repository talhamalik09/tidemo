import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-other-parties',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './other-parties.html',
  styleUrl: './other-parties.scss'
})
export class OtherParties {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reimbursingBankShort: ['', Validators.required],
      reimbursingBankFull: ['', Validators.required],

      issuingBankShort: ['', Validators.required],
      issuingBankFull: ['', Validators.required],

      lcReference: ['', Validators.required],
      issuer: ['', Validators.required],
      applicableRules: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  issuerOptions = ['Bank', 'Non-Bank'];
  rulesOptions = ['URR LATEST VERSION', 'NOTURR'];
}
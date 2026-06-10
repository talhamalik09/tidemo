import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-advise-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './advise-details.html',
  styleUrl: './advise-details.scss'
})
export class AdviseDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      instructionNextBank: ['', Validators.required],
      instructionPayingBank: ['', Validators.required],
      instructionIntermediaryBank: ['', Validators.required],
      account: ['', Validators.required],

      nextAdvisingBankShort: [''],
      nextAdvisingBankLong: ['', Validators.maxLength(500)],

      adviseThroughBankShort: [''],
      adviseThroughBankLong: ['', Validators.maxLength(500)],

      confirmationInstruction: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
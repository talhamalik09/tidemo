import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-guarantee-amount',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './guarantee-amount.html',
  styleUrl: './guarantee-amount.scss'
})
export class GuaranteeAmount {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      guaranteeAmount: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
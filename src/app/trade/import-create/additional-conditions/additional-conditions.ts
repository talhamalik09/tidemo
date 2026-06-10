import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-additional-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './additional-conditions.html',
  styleUrl: './additional-conditions.scss'
})
export class AdditionalConditions {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      additionalConditions: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Additional Conditions:', this.form.value);
    }
  }
}
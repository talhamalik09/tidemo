import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-reduction-increase',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './undertaking-reduction-increase.html',
  styleUrl: './undertaking-reduction-increase.scss'
})
export class UndertakingReductionIncrease {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  options = [
    'Regular',
    'Irregular'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectOption: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
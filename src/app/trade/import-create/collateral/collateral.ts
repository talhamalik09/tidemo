import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-collateral',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './collateral.html',
  styleUrl: './collateral.scss'
})
export class Collateral {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      ccy: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('ADD', this.form.value);
  }

  update() {
    console.log('UPDATE', this.form.value);
  }

  delete() {
    console.log('DELETE', this.form.value);
  }
}
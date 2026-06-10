import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-collateral',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
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
      description: ['', [Validators.required, Validators.minLength(3)]],
      amount: ['', [Validators.required, Validators.min(1)]],
      ccy: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    if (this.form.valid) {
      console.log('Add:', this.form.value);
    }
  }

  update() {
    if (this.form.valid) {
      console.log('Update:', this.form.value);
    }
  }

  delete() {
    console.log('Delete action');
  }
}
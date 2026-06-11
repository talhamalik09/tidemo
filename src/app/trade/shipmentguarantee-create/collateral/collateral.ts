import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-collateral',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      amount: ['', Validators.required],
      ccy: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() { console.log(this.form.value); }
  update() { console.log('update'); }
  delete() { console.log('delete'); }
}
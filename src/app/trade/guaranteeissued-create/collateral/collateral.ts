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
      description: ['', Validators.required],
      amount: ['', Validators.required],
      ccy: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log("Add clicked", this.form.value);
  }

  update() {
    console.log("Update clicked", this.form.value);
  }

  delete() {
    console.log("Delete clicked");
  }
}
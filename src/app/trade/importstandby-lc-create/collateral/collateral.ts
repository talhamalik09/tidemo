import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-collateral',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './collateral.html',
  styleUrls: ['./collateral.scss']
})
export class Collateral{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

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
    console.log('Add:', this.form.value);
  }

  update() {
    console.log('Update:', this.form.value);
  }

  delete() {
    console.log('Delete:', this.form.value);
  }

}
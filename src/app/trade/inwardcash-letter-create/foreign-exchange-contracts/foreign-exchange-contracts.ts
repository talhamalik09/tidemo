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
  selector: 'app-foreign-exchange-contracts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './foreign-exchange-contracts.html',
  styleUrls: ['./foreign-exchange-contracts.scss']
})
export class ForeignExchangeContracts{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      reference: ['', Validators.required],
      branch: ['', Validators.required],
      type: ['', Validators.required],
      purchaseCurrency: ['', Validators.required],
      saleCurrency: ['', Validators.required],
      rate: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('Add', this.form.value);
  }

  update() {
    console.log('Update', this.form.value);
  }

  delete() {
    console.log('Delete', this.form.value);
  }

  view() {
    console.log('View', this.form.value);
  }

}
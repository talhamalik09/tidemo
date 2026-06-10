import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-foreign-exchange-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './foreign-exchange-details.html',
  styleUrl: './foreign-exchange-details.scss'
})
export class ForeignExchangeDetails{

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  dealTypeOptions = ['Spot', 'Forward', 'Swap'];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      reference: ['', Validators.required],
      sellAmount: ['', Validators.required],
      rate: ['', Validators.required],
      buyAmount: ['', Validators.required],
      dealType: ['', Validators.required]
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
}
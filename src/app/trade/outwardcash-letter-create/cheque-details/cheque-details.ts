import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-cheque-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cheque-details.html',
  styleUrls: ['./cheque-details.scss']
})
export class ChequeDetails{

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      currency: ['', Validators.required],
      numberOfCheques: ['', Validators.required],
      seqNum: ['', Validators.required],
      amount: ['', Validators.required],
      payer: ['', Validators.required],
      status: ['', Validators.required],

      represent: [false],
      tracePayment: [false],
      withRecourse: [false],
      singleConsolidatedCheque: [false],
      autoPay: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save(action: string) {
    console.log(action, this.form.value);
  }

}
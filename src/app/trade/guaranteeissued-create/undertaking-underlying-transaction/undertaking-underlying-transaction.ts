import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-underlying-transaction',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './undertaking-underlying-transaction.html',
  styleUrl: './undertaking-underlying-transaction.scss'
})
export class UndertakingUnderlyingTransaction {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      underlyingTransactionDetails: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
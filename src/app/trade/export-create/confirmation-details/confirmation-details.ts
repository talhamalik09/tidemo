import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-confirmation-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './confirmation-details.html',
  styleUrl: './confirmation-details.scss'
})
export class ConfirmationDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  confirmationOptions = [
    'Confirmed',
    'May Add',
    'Unconfirmed'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      confirmationRequested: ['', Validators.required],
      selectConfirmation: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
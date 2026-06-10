import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-reimbursement-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reimbursement-details.html',
  styleUrl: './reimbursement-details.scss'
})
export class ReimbursementDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reimbursingBank: ['', Validators.required],
      instructions: ['', [Validators.required, Validators.minLength(5)]],
      account: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.minLength(5)]],
      transferMethod: ['', Validators.required],
      chargesFor: ['', Validators.required],
      applicableRules: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Reimbursement Details:', this.form.value);
    }
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-reimbursing-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reimbursing-details.html',
  styleUrl: './reimbursing-details.scss'
})
export class ReimbursingDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reimbursingBankName: ['', Validators.required],
      reimbursingBankAddress: ['', Validators.required],
      reference: ['', Validators.required],
      notesToReimbursingParty: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
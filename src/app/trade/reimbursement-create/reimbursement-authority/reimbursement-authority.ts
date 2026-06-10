import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-reimbursement-authority',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './reimbursement-authority.html',
  styleUrls: ['./reimbursement-authority.scss']
})
export class ReimbursementAuthority {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  confirmationOptions = ['Confirmed'];

  applicableRulesOptions = ['URR LATEST VERSION', 'NOT URR'];

  authorityTypeOptions = ['Specific', 'General'];

  productTypeOptions = ['<--->'];

  today = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      issuerReference: ['', Validators.required],
      lcIssueDate: ['', Validators.required],
      lcExpiryDate: ['', Validators.required],
      latestPresentationDate: ['', Validators.required],
      lcExpiryPlace: ['', Validators.required],
      receivedOn: ['', Validators.required],

      confirmation: ['', Validators.required],
      applicableRules: ['', Validators.required],
      authorityType: ['', Validators.required],
      productType: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
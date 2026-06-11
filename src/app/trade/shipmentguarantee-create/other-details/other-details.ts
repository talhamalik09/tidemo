import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-other-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './other-details.html',
  styleUrl: './other-details.scss'
})
export class OtherDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sundryReferenceCode: ['', Validators.required],
      userCode1: ['', Validators.required],
      userCode2: ['', Validators.required],
      mailToBranch: ['', Validators.required],
      responsibleUser: ['', Validators.required],
      relatedReference: ['', Validators.required],

      inputBranch: ['CITY', Validators.required],
      behalfOfBranch: ['LOND', Validators.required],
      responsibleTeam: ['hub', Validators.required],

      periodicChargeCycle: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  cycleOptions = [
    'Both dates on actual day',
    'Both dates on next working day',
    'Both dates on next working day (keep the same month)',
    'Both dates on previous working day',
    'Both dates on previous working day (keep the same month)',
    'Due date only on next working day',
    'Due date only on next working day (keep the same month)',
    'Due date only on previous working day (keep the same month)'
  ];
}
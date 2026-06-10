import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-other-details',
  standalone: true,
  imports: [ReactiveFormsModule , NgFor],
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
      inputBranch: ['', Validators.required],
      behalfOfBranch: ['', Validators.required],
      responsibleTeam: ['', Validators.required],
      mailToBranch: ['', [Validators.required, Validators.email]],
      relatedReference: ['', Validators.required],
      periodicChargeCycle: ['', Validators.required],
      sundryReferenceCode: ['', Validators.required],
      userCode1: ['', Validators.required],
      userCode2: ['', Validators.required],
      analysisCode: ['', Validators.required],
      lcCategory: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Other Details:', this.form.value);
    }
  }

  cycleOptions = [
    'cycleOption1',
    'cycleOption2',
    'cycleOption3',
    'cycleOption4',
    'cycleOption5',
    'cycleOption6',
    'cycleOption7'
  ];

  analysisOptions = ['Analysis Code 1', 'Analysis Code 2'];
  lcOptions = ['LC Category 1', 'LC Category 2'];
}
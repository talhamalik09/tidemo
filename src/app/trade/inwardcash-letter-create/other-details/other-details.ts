import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-other-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
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
      sundryReferenceCode: ['', Validators.required],
      userCode1: ['', Validators.required],
      userCode2: ['', Validators.required],
      mailToBranch: ['', Validators.required],
      responsibleUser: ['', Validators.required],
      relatedReference: ['', Validators.required],
      hub: ['', Validators.required],
      periodicChargeCycle: ['', Validators.required],
      lcCategory: ['', Validators.required],
      analysisCode: ['', Validators.required],
      responsibleTeam: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
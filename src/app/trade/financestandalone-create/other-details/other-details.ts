import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-other-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
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
      inputBranch: ['', Validators.required],
      behalfOfBranch: ['', Validators.required],
      responsibleTeam: ['', Validators.required],
      periodicChargeCycle: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  cycleOptions = ['Daily', 'Weekly', 'Monthly'];
}
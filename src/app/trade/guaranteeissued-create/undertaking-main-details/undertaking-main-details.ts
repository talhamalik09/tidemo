import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-main-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './undertaking-main-details.html',
  styleUrl: './undertaking-main-details.scss'
})
export class UndertakingMainDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      expiryDate: ['', Validators.required],
      nonPayableBefore: [''],
      governingLawCountry: [''],
      governingLawCountrySubdivision: [''],
      placeOfJurisdiction: [''],
      formOfUndertaking: ['', Validators.required],
      applicableRules: ['', Validators.required],
      issueDate: ['', Validators.required],
      financialTrade: [''],
      productType: [''],
      domesticExpiryAutomaticRelease: [false],
      partialDrawing: [false],
      multipleDrawing: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
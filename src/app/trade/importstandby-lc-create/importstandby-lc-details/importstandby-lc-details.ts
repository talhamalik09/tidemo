import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-importstandby-lc-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './importstandby-lc-details.html',
  styleUrls: ['./importstandby-lc-details.scss']
})
export class ImportstandbyLcDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      applicantReference: ['', Validators.required],
      governingLawCountry: ['', Validators.required],
      governingLawSubDivision: ['', Validators.required],
      expiryPlace: ['', Validators.required],
      placeOfJurisdiction: ['', Validators.required],
      notPayableBefore: ['', Validators.required],

      applicationDate: ['', Validators.required],
      issueDate: ['', Validators.required],

      issueBy: ['', Validators.required],
      expiryType: ['', Validators.required],
      confirmation: ['', Validators.required],
      financialTrade: ['', Validators.required],
      applicableRules: ['', Validators.required],
      productType: ['', Validators.required],

      transferable: [false],
      adviseDirect: [false],
      domesticExpiry: [false],
      irrevocable: [false],
      operative: [false],
      partialDrawings: [false],
      multipleDrawings: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
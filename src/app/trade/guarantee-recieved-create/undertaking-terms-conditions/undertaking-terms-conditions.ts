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
  selector: 'app-undertaking-terms-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './undertaking-terms-conditions.html',
  styleUrls: ['./undertaking-terms-conditions.scss']
})
export class UndertakingTermsConditions {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      undertakingTermsAndConditions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
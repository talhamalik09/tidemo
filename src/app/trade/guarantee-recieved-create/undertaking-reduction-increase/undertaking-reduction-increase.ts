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
  selector: 'app-undertaking-reduction-increase',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './undertaking-reduction-increase.html',
  styleUrls: ['./undertaking-reduction-increase.scss']
})
export class UndertakingReductionIncrease {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  selectOptions = [
    'Regular',
    'Irregular'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      selectOption: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
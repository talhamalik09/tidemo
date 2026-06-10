import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-participation-amounts',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './participation-amounts.html',
  styleUrl: './participation-amounts.scss'
})
export class ParticipationAmounts {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      totalCommitmentAmount: ['', Validators.required],

      bankShareAmount: ['', Validators.required],

      bankSharePercent: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
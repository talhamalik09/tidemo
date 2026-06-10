import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-more-parties',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './more-parties.html',
  styleUrl: './more-parties.scss'
})
export class MoreParties {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      consignee: ['', Validators.required],
      consigneeDetails: ['', Validators.required],

      payee: ['', Validators.required],
      payeeDetails: ['', Validators.required],

      inCaseOfNeed: ['', Validators.required],
      inCaseOfNeedDetails: ['', Validators.required],

      inCaseOfNeedPower: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  powerOptions = [
    'Advisory',
    'Act on Instructions'
  ];

}
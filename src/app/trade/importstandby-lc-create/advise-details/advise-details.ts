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
  selector: 'app-advise-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './advise-details.html',
  styleUrls: ['./advise-details.scss']
})
export class AdviseDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      instructionsFromApplicant: ['', Validators.required],
      instructionsToBank: ['', Validators.required],

      principal: ['', Validators.required],
      adviseThroughBank: ['', Validators.required],

      reference: ['', Validators.required],
      account: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
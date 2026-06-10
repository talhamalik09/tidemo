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
  selector: 'app-other-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './other-details.html',
  styleUrls: ['./other-details.scss']
})
export class OtherDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      inputBranch: ['', Validators.required],
      behalfOfBranch: ['', Validators.required],
      responsibleTeam: ['', Validators.required],
      relatedReference: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
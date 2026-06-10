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
  selector: 'app-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './instructions.html',
  styleUrls: ['./instructions.scss']
})
export class Instructions {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      swiftInstructions: ['', Validators.required],
      documentsRequired: ['', Validators.required],
      additionalConditions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
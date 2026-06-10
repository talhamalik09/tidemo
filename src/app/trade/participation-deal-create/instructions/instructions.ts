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
  selector: 'app-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './instructions.html',
  styleUrl: './instructions.scss'
})
export class Instructions {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      instructionsToParticipant: ['', Validators.required],

      specialInstructions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
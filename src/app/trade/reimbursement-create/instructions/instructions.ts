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
  selector: 'app-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './instructions.html',
  styleUrls: ['./instructions.scss']
})
export class Instructions {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  adviseMethodOptions = [
    'Mail',
    'Telex',
    'Telex via SWIFT',
    'SWIFT'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      instructionsReceived: ['', Validators.required],
      acknowledgementDetails: ['', Validators.required],
      acknowledgementNarrative: ['', Validators.required],
      adviceDetails: ['', Validators.required],

      sendAcknowledgement: [false],
      sendAdvise: [false],

      adviseMethod: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
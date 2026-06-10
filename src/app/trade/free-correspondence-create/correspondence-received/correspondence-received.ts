import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-correspondence-received',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './correspondence-received.html',
  styleUrl: './correspondence-received.scss'
})
export class CorrespondenceReceived {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  correspondenceTypeOptions: string[] = [
    'General',
    'Query',
    'Answer',
    'Cancel Message Request',
    'Ancillary'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      correspondenceType: ['', Validators.required],

      receivedFrom: ['', Validators.required],

      receivedFromDetails: ['', Validators.required],

      reference: ['', Validators.required],

      dateReceived: ['', Validators.required],

      instructionReceived: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
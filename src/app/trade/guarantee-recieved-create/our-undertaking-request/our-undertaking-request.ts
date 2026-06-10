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
  selector: 'app-our-undertaking-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './our-undertaking-request.html',
  styleUrls: ['./our-undertaking-request.scss']
})
export class OurUndertakingRequest {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  requestTypeOptions = [
    { label: 'Advise', value: 'advise', disabled: true }
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      requestType: [{ value: 'advise', disabled: true }, Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
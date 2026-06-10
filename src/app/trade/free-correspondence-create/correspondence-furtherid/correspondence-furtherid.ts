import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-correspondence-furtherid',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './correspondence-furtherid.html',
  styleUrl: './correspondence-furtherid.scss'
})
export class CorrespondenceFurtherid {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  correspondenceFurtherIdOptions = [
    '<--->'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      correspondenceFurtherId: ['', Validators.required],

      extraInformation: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
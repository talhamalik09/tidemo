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
  selector: 'app-our-undertaking-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './our-undertaking-details.html',
  styleUrls: ['./our-undertaking-details.scss']
})
export class OurUndertakingDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      operative: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
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
  selector: 'app-other-parties',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './other-parties.html',
  styleUrls: ['./other-parties.scss']
})
export class OtherParties{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      reimbursingBank: ['', Validators.required],
      reimbursingBankDetails: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
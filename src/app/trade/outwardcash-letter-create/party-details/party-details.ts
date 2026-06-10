import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './party-details.html',
  styleUrls: ['./party-details.scss']
})
export class PartyDetails {

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      payee: ['', Validators.required],
      payeeDetails: ['', Validators.maxLength(500)],

      correspondent: ['', Validators.required],
      correspondentDetails: ['', Validators.maxLength(500)],

      country: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-negotiation-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './negotiation-details.html',
  styleUrls: ['./negotiation-details.scss']
})
export class NegotiationDetails {

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      percent: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],

      negotiationRequired: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    console.log(this.form.value);
  }

}
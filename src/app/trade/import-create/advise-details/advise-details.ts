import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-advise-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './advise-details.html',
  styleUrl: './advise-details.scss'
})
export class AdviseDetails {

  labels = LABELS;
  lang: 'en' ='en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
   this.form = this.fb.group({
  instructionFromApplicant: ['', Validators.required],

  principle: ['', Validators.required],

  instructionToBank: ['', Validators.required],

  adviseThroughBank: ['', Validators.required],

  account: [
    '',
    [Validators.required, Validators.minLength(3), Validators.maxLength(34)]
  ],

  reference: [
    '',
    [Validators.required, Validators.maxLength(20)]
  ]
});
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
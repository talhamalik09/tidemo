import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-participant-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './participant-details.html',
  styleUrl: './participant-details.scss'
})
export class ParticipantDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // CHECKBOXES
      sharedLiability: [false],
      showExtraParties: [false],
      showLiabilitySharedParties: [false],
      showAllParties: [false],

      // INPUT FIELDS
      role: ['', Validators.required],
      name: ['', Validators.required],
      reference: ['', Validators.required],
      share: ['', Validators.required],
      rounding: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  roles() {
    console.log('Roles clicked');
  }

  add() {
    console.log('Add clicked');
  }

  view() {
    console.log('View clicked');
  }

  update() {
    console.log('Update clicked');
  }

  delete() {
    console.log('Delete clicked');
  }
}
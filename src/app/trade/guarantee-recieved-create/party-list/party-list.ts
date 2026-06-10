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
  selector: 'app-party-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './party-list.html',
  styleUrls: ['./party-list.scss']
})
export class PartyList {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      sharedLiability: [false],
      showExtraParties: [false],
      showLiabilitySharedParties: [false],
      linkToParticipationFacility: [false],
      showAllParties: [false],

      role: ['', Validators.required],
      party: ['', Validators.required],
      reference: ['', Validators.required],
      liability: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
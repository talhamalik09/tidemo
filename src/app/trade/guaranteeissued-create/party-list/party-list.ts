import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './party-list.html',
  styleUrl: './party-list.scss'
})
export class PartyList {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sharedLiability: [false],
      showExtraParties: [false],
      showLiabilitySharedParties: [false],
      linkToParticipationFacility: [false],
      showAllParties: [false],

      role: [''],
      party: [''],
      reference: [''],
      liability: ['']
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
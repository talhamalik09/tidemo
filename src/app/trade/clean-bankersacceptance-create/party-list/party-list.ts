import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      linkToParticipation: [false],
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

  add() { console.log('Add', this.form.value); }
  update() { console.log('Update', this.form.value); }
  delete() { console.log('Delete'); }
  view() { console.log('View'); }
  roles() { console.log('Roles'); }
}
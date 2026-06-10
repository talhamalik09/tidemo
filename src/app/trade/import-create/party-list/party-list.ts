import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-list',
  standalone: true,
  imports: [ReactiveFormsModule],
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

      role: ['', Validators.required],
      party: ['', Validators.required],
      reference: ['', Validators.required],
      liability: ['', [Validators.required, Validators.min(0)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save(action: string) {
    if (this.form.valid) {
      console.log(action, this.form.value);
    }
  }
}
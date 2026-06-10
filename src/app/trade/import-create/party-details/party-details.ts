import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './party-details.html',
  styleUrl: './party-details.scss',
  animations: [
    trigger('slideToggle', [
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class PartyDetails {

  // 🌐 Localization
  labels = LABELS;
lang: 'en' = 'en';

  // 🔽 toggle section
  isOpen = true;

  // 🧾 Reactive form
  form: FormGroup;

  // 🌍 ALL COUNTRIES (simplified full world list)
  countries: string[] = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia",
    "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Belgium",
    "Brazil","Canada","China","Denmark","Egypt","France","Germany","India",
    "Indonesia","Iran","Iraq","Italy","Japan","Kenya","Kuwait","Malaysia",
    "Maldives","Mexico","Nepal","Netherlands","New Zealand","Nigeria",
    "Norway","Oman","Pakistan","Qatar","Russia","Saudi Arabia","Singapore",
    "South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland",
    "Turkey","UAE","UK","USA","Vietnam","Zimbabwe"
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      applicant: ['', [Validators.required, this.wordLimit(17)]],
      advisingBank: ['', [Validators.required, this.uppercaseValidator]],
      beneficiary: ['', [Validators.required, this.beneficiaryValidator]],
      beneficiaryAccount: ['', [Validators.required, this.accountValidator]],
      country: ['', Validators.required],
      instruction: ['', Validators.required],
      applicantDesc: ['', Validators.required], 
    });

  }

  // 🔼 toggle animation
  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  // ---------------- VALIDATIONS ----------------

  // Applicant: max 17 words
  wordLimit(limit: number) {
    return (control: any) => {
      const words = control.value?.trim().split(/\s+/).filter(Boolean).length || 0;
      return words > limit ? { wordLimit: true } : null;
    };
  }

  // Advising bank: uppercase only
  uppercaseValidator(control: any) {
    const value = control.value || '';
    return value === value.toUpperCase() ? null : { notUppercase: true };
  }

  // Beneficiary: first word capital + max 20 words
  beneficiaryValidator(control: any) {
    const value = control.value || '';
    const words = value.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return null;

    const firstWord = words[0];
    const isCapital = firstWord[0] === firstWord[0]?.toUpperCase();

    if (words.length > 20) return { tooManyWords: true };
    if (!isCapital) return { firstNotCapital: true };

    return null;
  }

  // Account: exactly 24 characters
  accountValidator(control: any) {
    const value = control.value || '';
    return value.length === 24 ? null : { invalidLength: true };
  }
}
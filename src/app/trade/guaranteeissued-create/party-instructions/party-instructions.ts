import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './party-instructions.html',
  styleUrl: './party-instructions.scss'
})
export class PartyInstructions {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      instructionFromInstructingParty: ['', Validators.required],
      responseToInstructingParty: ['', Validators.required],
      instructionToNextParty: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
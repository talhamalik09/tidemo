import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-other-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './other-details.html',
  styleUrl: './other-details.scss'
})
export class OtherDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputBranch: ['CITY', Validators.required],
      behalfOfBranch: ['LOND', Validators.required],
      responsibleTeam: ['HUB', Validators.required],
      relatedReference: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
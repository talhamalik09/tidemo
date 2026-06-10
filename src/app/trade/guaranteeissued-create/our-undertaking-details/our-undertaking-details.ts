import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-our-undertaking-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './our-undertaking-details.html',
  styleUrl: './our-undertaking-details.scss'
})
export class OurUndertakingDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      operative: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
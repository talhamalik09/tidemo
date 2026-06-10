import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-transferable-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './undertaking-transferable-details.html',
  styleUrl: './undertaking-transferable-details.scss'
})
export class UndertakingTransferableDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      transferable: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
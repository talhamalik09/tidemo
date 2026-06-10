import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './instruction.html',
  styleUrl: './instruction.scss'
})
export class Instruction {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      additionalConditions: ['', Validators.required],
      notesToImporter: ['', Validators.required],
      notesToShippingCompany: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
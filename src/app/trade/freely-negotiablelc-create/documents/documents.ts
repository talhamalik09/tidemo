import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  documentDisposalOptions = [
    'Hold',
    'Return',
    'Notify',
    'Previous Instructions'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dateDocumentsSent: ['', Validators.required],
      numberOfDocuments: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      mail1: [''],
      mail2: [''],
      totalAttached: ['', Validators.required],

      documentDisposal: ['', Validators.required],

      advisePresenterDocsInOrder: [false],
      showAllDocuments: [false],

      documentDisposalDetails: ['']
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
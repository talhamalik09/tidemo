import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-attached-documents',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './attached-documents.html',
  styleUrl: './attached-documents.scss'
})
export class AttachedDocuments {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      code: ['', Validators.required],
      type: ['', Validators.required],
      firstMail: ['', Validators.required],
      secondMail: ['', Validators.required],
      total: ['', Validators.required],
      attached: ['', Validators.required],
      showAllDocuments: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
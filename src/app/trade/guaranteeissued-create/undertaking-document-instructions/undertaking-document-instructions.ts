import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-document-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './undertaking-document-instructions.html',
  styleUrl: './undertaking-document-instructions.scss'
})
export class UndertakingDocumentInstructions {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      documentPresentationInstructions: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
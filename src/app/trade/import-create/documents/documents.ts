import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      documentText: ['', [Validators.required, Validators.maxLength(300)]],
      documentFile: [null, Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.form.patchValue({
      documentFile: file
    });
  }

  save() {
    if (this.form.valid) {
      console.log('Documents Data:', this.form.value);
    }
  }
}
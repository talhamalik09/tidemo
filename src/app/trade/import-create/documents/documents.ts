import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor,NgIf],
  templateUrl: './documents.html',
  styleUrls: ['./documents.scss']
})
export class Documents {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      documentList: this.fb.array([])
    });

    this.addDocument();
  }

  get documentList(): FormArray {
    return this.form.get('documentList') as FormArray;
  }

  createDocumentGroup(): FormGroup {
    return this.fb.group({
      documentRequired: ['', Validators.required],
      attachment: [null]   // 👈 NEW FIELD
    });
  }

  addDocument() {
    this.documentList.push(this.createDocumentGroup());
  }

  removeDocument(index: number) {
    this.documentList.removeAt(index);
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  // ✅ HANDLE FILE CHANGE
  onFileSelect(event: any, index: number) {

    const file = event.target.files[0];

    if (file) {
      this.documentList.at(index).patchValue({
        attachment: file
      });
    }

  }
}
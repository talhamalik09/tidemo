import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-attached-documents',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './attached-documents.html',
  styleUrls: ['./attached-documents.scss']
})
export class AttachedDocuments{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  showAllDocumentsOptions = [
    'Document 1',
    'Document 2',
    'Document 3',
    'Document 4'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      code: ['', Validators.required],
      type: ['', Validators.required],
      firstMail: ['', Validators.required],
      secondMail: ['', Validators.required],
      total: ['', Validators.required],
      attached: ['', Validators.required],

      showAllDocuments: [[]]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('Add', this.form.value);
  }

  update() {
    console.log('Update', this.form.value);
  }

  delete() {
    console.log('Delete', this.form.value);
  }

  replace() {
    console.log('Replace', this.form.value);
  }

}
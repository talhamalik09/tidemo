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
  selector: 'app-undertaking-document-presentation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './undertaking-document-presentation.html',
  styleUrls: ['./undertaking-document-presentation.scss']
})
export class UndertakingDocumentPresentation {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      documentAndPresentationInstructions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
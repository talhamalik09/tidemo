import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-transferable-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './undertaking-transferable-details.html',
  styleUrls: ['./undertaking-transferable-details.scss']
})
export class UndertakingTransferableDetails{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      transferable: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
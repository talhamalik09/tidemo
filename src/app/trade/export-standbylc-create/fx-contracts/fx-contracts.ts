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
  selector: 'app-fx-contracts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './fx-contracts.html',
  styleUrls: ['./fx-contracts.scss']
})
export class FxContracts{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      reference: ['', Validators.required],
      branch: ['', Validators.required],
      type: ['', Validators.required],
      purchaseCurrency: ['', Validators.required],
      saleCurrency: ['', Validators.required],
      rate: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
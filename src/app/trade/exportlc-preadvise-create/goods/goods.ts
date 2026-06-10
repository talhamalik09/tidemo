import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './goods.html',
  styleUrl: './goods.scss'
})
export class Goods {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      goodsDescription: ['', Validators.required],

      narrative: ['', Validators.required],

      acknowledgementNarrative: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
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

      goodsCode: ['', Validators.required],

      shipmentFrom: ['', Validators.required],

      shipmentTo: ['', Validators.required],

      expectedDate: ['', Validators.required],

      vesselAircraft: ['', Validators.required],

      goodsDescription: ['', [Validators.required, Validators.minLength(10)]]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
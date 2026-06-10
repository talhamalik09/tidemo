import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
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
      goodsCode: ['', [Validators.required, Validators.maxLength(20)]],
      goodsDescription: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Goods Data:', this.form.value);
    }
  }
}
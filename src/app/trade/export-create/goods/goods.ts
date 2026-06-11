import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';

import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './goods.html',
  styleUrls: ['./goods.scss']
})
export class Goods {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      goodsList: this.fb.array([])

    });

    // start with 1 row
    this.addGoods();

  }

  // ✅ GET FORM ARRAY
  get goodsList(): FormArray {
    return this.form.get('goodsList') as FormArray;
  }

  // ✅ CREATE SINGLE ROW
  createGoodsGroup(): FormGroup {
    return this.fb.group({
      goodsCode: ['', Validators.required],
      goodsDescription: ['', Validators.required]
    });
  }

  // ✅ ADD GOODS
  addGoods() {
    this.goodsList.push(this.createGoodsGroup());
  }

  // ❌ REMOVE GOODS (optional)
  removeGoods(index: number) {
    this.goodsList.removeAt(index);
  }

  // toggle section
  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
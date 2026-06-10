import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charge-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './charge-details.html',
  styleUrls: ['./charge-details.scss']
})
export class ChargeDetails{

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      preferredCurrency: ['', Validators.required],
      billingLevel: ['', Validators.required],
      defer: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}
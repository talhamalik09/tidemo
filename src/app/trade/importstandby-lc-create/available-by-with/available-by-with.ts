import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-available-by-with',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './available-by-with.html',
  styleUrls: ['./available-by-with.scss']
})
export class AvailableByWith{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      availableBy: ['', Validators.required],
      availableWith: ['', Validators.required],

      draft: [false],

      percentageOfInvoice: ['', [Validators.required, Validators.min(0), Validators.max(100)]]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
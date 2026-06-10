import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-parties-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './parties-list.html',
  styleUrls: ['./parties-list.scss']
})
export class PartiesList {

  form: FormGroup;
  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // CHECKBOXES
      showExtraParties: [false],
      showLiabilitySharedParties: [false],
      showAllParties: [false],

      // FIELDS
      role: ['', Validators.required],
      party: ['', Validators.required],
      reference: ['', Validators.required],
      liability: ['', Validators.required]

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
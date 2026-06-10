import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './schedules.html',
  styleUrl: './schedules.scss'
})
export class Schedules {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      party: ['', Validators.required],
      scheduleType: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('Add', this.form.value);
  }

  update() {
    console.log('Update', this.form.value);
  }

  delete() {
    console.log('Delete', this.form.value);
  }
}
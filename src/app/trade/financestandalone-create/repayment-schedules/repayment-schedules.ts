import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-repayment-schedules',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './repayment-schedules.html',
  styleUrl: './repayment-schedules.scss'
})
export class RepaymentSchedules{

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  scheduleOptions = ['Regular', 'Irregular'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      repaymentSchedule: ['', Validators.required],
      noticeDays: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      noticeRequired: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
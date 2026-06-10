import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-instruction-received',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './instruction-received.html',
  styleUrl: './instruction-received.scss'
})
export class InstructionReceived {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      instructingParty: ['', Validators.required],
      receivedRequestType: ['', Validators.required],
      instructingPartyReference: ['', Validators.required],
      issueBy: ['', Validators.required],
      applicantDate: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  instructingPartyOptions = [
    'Applicant',
    'Counter Received From Bank',
    'Principle (if not applicant)'
  ];

  issueByOptions = [
    'Internal',
    'Mail',
    'Telex',
    'Telex via Swift',
    'Swift',
    'Fax',
    'Gateway',
    'Email'
  ];
}
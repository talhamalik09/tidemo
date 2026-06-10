import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-instruction-recieved',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './instruction-recieved.html',
  styleUrls: ['./instruction-recieved.scss']
})
export class InstructionRecieved {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  receivedFromPartyOptions = [
    'Issuing Bank',
    'Advising Bank'
  ];

  receivedRequestOptions = [
    'Issue'
  ];

  adviseByOptions = [
    'Internal',
    'Mail',
    'Telex',
    'Telex Via Swift',
    'Swift',
    'Email',
    'Gateway',
    'Fax'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      receivedFromParty: ['', Validators.required],
      receivedRequest: ['', Validators.required],
      adviseBy: ['', Validators.required],

      receivedFromReference: ['', Validators.required],
      adviseDate: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}